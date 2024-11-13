import { IRSCProps } from '../../../interfaces/IRSC';
import { MediaClient } from './Client';
import { NextPage } from 'next';

const RSC: NextPage<IRSCProps> = async () => {
  return <MediaClient />;
}

export default RSC;