import { NextPage } from 'next';

const Restricted: NextPage<{ reason?: string }> = (props) => {
  return (
    <div className="page">
      restricted due to {props.reason}
    </div>
  );
}

export default Restricted;