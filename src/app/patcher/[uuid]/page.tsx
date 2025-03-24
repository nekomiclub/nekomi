import '~/styles/pages/patcher.scss';

import { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { HandleServerError } from '~/components/Errors';
import { CheckUserAccess } from '~/helpers/Authorization';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import { DubberCompact } from '~/interfaces/DubberIntf';
import API from '~/services/ApiService';
import { config, metaObject } from '../../../config';
import { IRSCProps } from '../../../interfaces/IRSC';

import { PatcherCapabilities, PatcherCreateNewAnime, PatcherMeta } from './PatcherPage';



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

  let anime: HydratedAnime | null = null;
  let dubbers: DubberCompact[] = [];

  const session = cookies().get(config.vars.SessionCookie)?.value ?? '';

  const { user, capabilities } = await CheckUserAccess({ capabilities: ['titleEdit', 'seriesAdd'], checkMode: 'OR', session })
  if (!user || !capabilities) return notFound();

  try {
    const { anime, genres, media, rate, season, status, dubbers } = await API.getAnime({ query: uuid, detailed: true, fetchDubbers: true })
    const { fullfilled, total, updated } = await API.getAnimeAll();

    const hydratedAnime: HydratedAnime = { anime, genres, media, rate, season, status }

    const isRoot = capabilities.includes('root');
    const canAdd = isRoot || capabilities.includes('titleAdd');
    const canEdit = isRoot || capabilities.includes('titleEdit');
    const canDelete = isRoot || capabilities.includes('titleDelete');

    const caps: PatcherCapabilities = {
      canDelete,
      canEdit
    }



    return <>
      <div style={{ height: `calc(32px + var(--header-height))` }}></div>

      <main className="flex flex-col gap-[40px]">
        {/* Metadata */}
        <section className="wrapper gap-[40px]">
          {/* Header */}
          <section className="flex items-center justify-between gap-[24px]">
            <div className="flex items-center gap-[32px]">
              <h2 className="text-white text-[40px] font-manrope font-bold">РЕДАКТОР АНІМЕ</h2>

              {canAdd && <PatcherCreateNewAnime />}
            </div>

            <div className="flex flex-col items-end gap-[4px]">
              <p className="text-grey-new font-manrope">Аніме оновлено: <span className="font-space-grotesk">{updated} / {total} ({((updated / total) * 100).toFixed(2)}%)</span></p>
              <p className="text-grey-new font-manrope">Аніме з MAL ID: <span className="font-space-grotesk">{fullfilled} / {total} ({((fullfilled / total) * 100).toFixed(2)}%)</span></p>
            </div>
          </section>

          <PatcherMeta hydratedAnime={hydratedAnime} capabilities={caps} />
        </section>
      </main>
    </>
  } catch (e) {
    return HandleServerError(e)
  }
}