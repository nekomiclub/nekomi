import { config as dotenv } from 'dotenv';
import { defineConfig } from 'orval';

dotenv();



export default defineConfig({
  api: {
    input: {
      target: `${process.env.NEXT_PUBLIC_NEKOMI_API_URL}/docs/openapi.json`,
    },

    output: {
      mode: 'single',
      target: './src/shared/lib/api/routes/@generated.schema.ts',
      client: 'zod',

      override: {
        zod: {
          version: 4,
          generateReusableSchemas: true
        }
      },
    },
  },
});