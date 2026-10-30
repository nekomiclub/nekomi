import { NextPage } from 'next';

import { ErrorWentWrong } from '~/components/Errors';

const RSC: NextPage = (props) => {
  return <ErrorWentWrong code="ERROR_SOMETHING_WENT_WRONG" />;
};

export default RSC;