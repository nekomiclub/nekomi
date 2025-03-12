import { Metadata } from 'next';

import { config, CONSTS, devMode, metaObject } from '~/config';
import { ILayoutProps, IRSCProps } from '~/interfaces/IRSC';
import { Routes } from '~/routes';
import API from '~/services/ApiService';



export async function generateMetadata(
  props: IRSCProps<{ username: string }>,
): Promise<Metadata> {
  const params = await props.params;
  const { username } = params;

  try {
    const { metadata } = await API.getUser({ query: username, metadataOnly: true });

    const description = `Профіль користувача на ${CONSTS.Domains.nekomi}`;

    return metaObject({
      title: metadata?.title,
      description,
      openGraph: {
        title: `${metadata?.description} ― nekomi`,
        description,
        type: 'profile',
        images: metadata?.photo,
        username: metadata?.title,
        url: `${config.URL.baseURL}${Routes.user_profile.path}/${username}`,
        locale: 'uk_UA',
        siteName: CONSTS.Domains.nekomi.split('.')[0],
      }
    })
  } catch (e) {
    if (devMode) console.error(`User layout generateMetadata error`, e);

    return metaObject({ title: 'Користувач не знайдений', robots: ['nofollow', 'noindex'] })
  }
}



export default async function Layout({ children }: ILayoutProps) {
  return children;
}