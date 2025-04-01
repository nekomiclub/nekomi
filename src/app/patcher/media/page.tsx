import { NextPage } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { config } from '~/config';
import { Routes } from '~/routes';
import CheckUserAccess from '~/utils/check-user-access';
import { IRSCProps } from '../../../interfaces/IRSC';

import { MediaClient } from './Client';

const RSC: NextPage<IRSCProps> = async () => {
  let session = cookies().get(config.vars.SessionCookie)?.value ?? '';

  const { user } = await CheckUserAccess({ capabilities: ['root'], checkMode: 'AND', session })
  if (!user) return redirect(Routes.home.path);

  return <MediaClient />;
}

export default RSC;