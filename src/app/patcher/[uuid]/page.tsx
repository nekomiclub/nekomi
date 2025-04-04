import '~/styles/pages/patcher.scss';

import { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { HandleServerError } from '~/components/Errors';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import API from '~/services/ApiService';
import CheckUserAccess from '~/utils/check-user-access';
import { config, metaObject } from '../../../config';
import { IRSCProps } from '../../../interfaces/IRSC';

import { PatcherCapabilities, PatcherCreateNewAnime, PatcherEpisodes, PatcherMeta, PatcherWithoutMalId } from './PatcherPage';



export interface PatcherPageParams extends Params {
  uuid: string
}



export async function generateMetadata(
  props: IRSCProps<PatcherPageParams>,
): Promise<Metadata> {
  const { uuid } = await props.params;

  try {
    const { metadata } = await API.getAnime({ query: uuid, metadataOnly: true })

    return metaObject({
      title: metadata?.title.replace('Аніме ', 'Редагування '),
    })
  } catch (e) {
    return metaObject({ title: 'Аніме не знайдено', robots: ['nofollow', 'noindex'] })
  }
}



export default async function RSC(props: IRSCProps<PatcherPageParams>) {
  const { uuid } = await props.params;

  const session = cookies().get(config.vars.SessionCookie)?.value ?? '';

  const { user, capabilities } = await CheckUserAccess({ capabilities: ['titleEdit', 'seriesAdd'], checkMode: 'OR', session })
  if (!user || !capabilities) return notFound();



  try {
    const { anime, genres, media, rate, season, status, dubbers } = await API.getAnime({ query: uuid, detailed: true, fetchDubbers: true })
    const { fullfilled, total, updated } = await API.getAnimeAll();

    const hydratedAnime: HydratedAnime = { anime, genres, media, rate, season, status }

    const isRoot = capabilities.includes('root');
    const isAdmin = isRoot || capabilities.includes('admin');
    const canAdd = isAdmin || capabilities.includes('titleAdd');
    const canEdit = isAdmin || capabilities.includes('titleEdit');
    const canDelete = isAdmin || capabilities.includes('titleDelete');
    const canSeriesUpload = isAdmin || capabilities.includes('seriesAdd');
    const canSeriesDelete = isAdmin || capabilities.includes('seriesDelete');
    const canUploadQ2160 = isAdmin || capabilities.includes('admin');

    const caps: PatcherCapabilities = {
      canDelete,
      canEdit,
      canSeriesDelete,
      canSeriesUpload,
      canUploadQ2160,
      admin: isAdmin,
    }



    return <>
      <div style={{ height: `calc(32px + var(--header-height))` }}></div>

      <main className="flex flex-col gap-[40px] pb-[100px]">
        {/* Metadata */}
        <section className="wrapper gap-[40px]">
          {/* Header */}
          <section className="flex items-center justify-between gap-[24px] max-md:flex-col">
            <div className="flex items-center gap-[32px]">
              <h2 className="text-white text-[40px] font-manrope font-bold max-lg:text-[24px]">РЕДАКТОР АНІМЕ</h2>

              <div className="flex items-center gap-[8px]">
                {canEdit && <PatcherWithoutMalId />}
                {canAdd && <PatcherCreateNewAnime />}
              </div>
            </div>

            <div className="flex flex-col items-end gap-[4px] max-md:flex-row max-md:gap-[16px]">
              <p className="text-grey-new font-manrope">Аніме оновлено: <span className="font-space-grotesk">{updated} / {total} ({((updated / total) * 100).toFixed(2)}%)</span></p>
              <p className="text-grey-new font-manrope">Аніме з MAL ID: <span className="font-space-grotesk">{fullfilled} / {total} ({((fullfilled / total) * 100).toFixed(2)}%)</span></p>
            </div>
          </section>

          <PatcherMeta hydratedAnime={hydratedAnime} capabilities={caps} />
        </section>

        <PatcherEpisodes hydratedAnime={hydratedAnime} capabilities={caps} dubbers={dubbers ?? []} session={session} />
      </main>
    </>
  } catch (e) {
    return HandleServerError(e)
  }
}