import { NextPage } from 'next';
import { HappenedWrongScreen } from '../../../../components/OopsComponents';

const RSC: NextPage = (props) => {
  return <HappenedWrongScreen cause='Test cause' />
}

export default RSC;