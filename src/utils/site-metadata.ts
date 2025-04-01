import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

import { CONSTS } from '~/config';



/** Site metadata */
function siteMetadata(payload: {
  title?: string,
  description?: string,
  keywords?: string[],
  openGraph?: OpenGraph,
  robots?: ('all' | 'noindex' | 'nofollow')[],
}): Metadata {
  const defaultKeywords = ['nekomi', 'аніме', 'аніме онлайн', 'некомі', 'anime'];

  const title = payload.title !== undefined ? `${payload.title} ― nekomi` : 'nekomi ― аніме українською';
  const description = payload.description !== undefined ? payload.description : 'Онлайн кінотеатр аніме українською nekomi.club!';
  const keywords = payload.keywords?.length ? [...payload.keywords, ...defaultKeywords] : defaultKeywords
  const siteName = CONSTS.Domains.nekomi.split('.')[0];
  const robots: string = payload.robots?.length ? payload.robots?.join(',') : 'all';

  if (payload.openGraph) payload.openGraph.title = `${payload.openGraph.title} ― nekomi`;

  return {
    title,
    description,
    keywords,
    applicationName: siteName,
    robots,
    openGraph: payload.openGraph ?? {
      title,
      description,
      images: 'https://media.nekomi.club/efe3322f-69db-4084-b21b-5e139978292c',
      siteName,
      locale: 'uk_UA',
      type: 'website',
    }
  }
}



export default siteMetadata