import { NextPage } from 'next';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { config } from '~/config';
import { RSCProps } from '~/interfaces/types';
import CheckUserAccess from '~/utils/check-user-access';

import { MediaClient } from './Client';



const RSC: NextPage<RSCProps> = async () => {
  let session = cookies().get(config.vars.SessionCookie)?.value ?? '';

  const { user } = await CheckUserAccess({ capabilities: ['root'], checkMode: 'AND', session })
  if (!user) return notFound()

  return <MediaClient />;
}

export default RSC;