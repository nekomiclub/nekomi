import { NextPage } from 'next';

import { IRSCProps } from '../../../interfaces/IRSC';

import { MediaClient } from './Client';

const RSC: NextPage<IRSCProps> = async () => {
  return <MediaClient />;
}

export default RSC;