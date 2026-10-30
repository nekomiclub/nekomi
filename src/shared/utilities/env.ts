/** @fileoverview NextJS env handler */

import z, { ZodError } from 'zod';



/** 
 * Environment config schema
 * 
 * Not NEXT_PUBLIC key should be marked as optional to prevent client-server errors
 */
const EnvConfigSchema = z.object({
  CSRF_SK: z.string().optional(),

  NEXT_PUBLIC_TELEGRAM_BOT_URL: z.string(),
  NEXT_PUBLIC_NEKOMI_NEXTJS_URL: z.string(),
  NEXT_PUBLIC_NEKOMI_API_URL: z.string(),
});

export type TEnvConfigSchema = z.infer<typeof EnvConfigSchema>



/** @caution should not be used in production. To get specific env, use "env" function */
export function parseEnv(): z.infer<typeof EnvConfigSchema> {
  try {
    return EnvConfigSchema.parse({
      CSRF_SK: process.env.CSRF_SK,
      NEXT_PUBLIC_TELEGRAM_BOT_URL: process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL,
      NEXT_PUBLIC_NEKOMI_NEXTJS_URL: process.env.NEXT_PUBLIC_NEKOMI_NEXTJS_URL,
      NEXT_PUBLIC_NEKOMI_API_URL: process.env.NEXT_PUBLIC_NEKOMI_API_URL,
    } satisfies Record<keyof TEnvConfigSchema, string | undefined>);
  } catch (e) {
    if (e instanceof ZodError) {
      console.log(e);

      throw new Error(`[Env]: Env parse is invalid. Errors: ${JSON.stringify(e, null, 2)}`);
    } else throw e;
  }
}

/** Get enviromental variable function */
function env<K extends keyof TEnvConfigSchema>(key: K): TEnvConfigSchema[K] {
  return parseEnv()[key];
}



export default env;