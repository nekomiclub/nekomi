import { Metadata } from 'next';

import { ILegalPagesQueryParams, IRSCProps } from '~/shared/types/PagesParams';
import { getServerDocumentMarkdown } from '~/shared/utilities/server-utils';
import siteMetadata from '~/shared/utilities/site-metadata';

import LegalMarkdown from '../_components/LegalMarkdown';
import { LegalArticle, LegalHeader, LegalWrapper } from '../_components/LegalUI';



type PageParamsType = IRSCProps<undefined, ILegalPagesQueryParams>



// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(
  props: PageParamsType,
): Promise<Metadata> {
  const { lang } = await props.searchParams;



  return siteMetadata({
    title: lang === 'uk' ? 'Угода користувача' : 'Terms Of Service',
  });
}



export default async function LegalTermsOfServiceRSC(props: PageParamsType) {
  let { lang } = await props.searchParams;
  if (!lang) lang = 'uk';

  const markdown = await getServerDocumentMarkdown(lang === 'uk' ? 'tos.uk.md' : 'tos.md');

  return <LegalWrapper>
    <LegalHeader />

    <LegalArticle>
      <LegalMarkdown {...{ markdown }} />
    </LegalArticle>
  </LegalWrapper >;
}