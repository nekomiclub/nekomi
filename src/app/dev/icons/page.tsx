import { NextPage } from 'next';

import * as IcoSocial from '~/assets/Social';
import * as IcoSupport from '~/assets/Support';

const page: NextPage = (props) => {
  return (
    <div className="page w-full min-h-screen h-full bg-dark-primary">
      <div className="wrapper gap-[16px]">
        <p className="text-white">Icos must be gray and 40x40. If not check icon validity.</p>

        <Group title="Support" Icons={IcoSupport} />
        <Group title="Social" Icons={IcoSocial} />
      </div>
    </div>
  );

  function Group({ Icons, title }: { title: string, Icons: Object }) {
    return (
      <div className="flex flex-col gap-[8px]">
        <h2 className="text-[24px] text-bold text-white">{title}</h2>
        <div className="flex flex-wrap gap-[16px]">
          {Object.keys(Icons).map(key => {
            return <div key={key} title={key}>{Icons[key]({ fill: '#999', width: 40, height: 40 })}</div>;
          })}
        </div>
      </div>
    );
  }
};

export default page;