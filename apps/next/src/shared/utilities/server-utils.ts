'use server';

import fs from 'fs';
import path from 'path';



type DocumentMarkdownNameType = 'tos.md' | 'tos.uk.md' | 'privacy_policy.md' | 'privacy_policy.uk.md'

const DocumentMarkdownLinkMap: Record<DocumentMarkdownNameType, string> = {
  'tos.md': 'terms-of-service?lang=en',
  'tos.uk.md': 'terms-of-service?lang=uk',
  'privacy_policy.md': 'privacy-policy?lang=en',
  'privacy_policy.uk.md': 'privacy-policy?lang=uk',
};



/** Get server-side document markdown text */
export const getServerDocumentMarkdown = async (name: DocumentMarkdownNameType) => fs.readFileSync(path.resolve(`public/docs/${name}`))
  .toString()
  .replaceAll('<br />', '\n') // Replcae br tags with new line
  .replaceAll(/\]\(\.\/([^)]*\.md)\)/g, (_, path) => `](${DocumentMarkdownLinkMap[path]})`); // Replace local md files with exist urls