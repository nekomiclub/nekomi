import Link from "next/link";
import { Home } from '../../assets/assets'
import { routes } from '../../routes'

import './styles.scss'

// export const TMP = (props: { width?: number, height?: number, className?: string }) => {
//   return (


//   );
// }

export const ReturnToHome = () => {
  return (
    <Link href={routes.home.path}>
      <button className='oops-button flex items-center gap-[24px] py-[8px] px-[24px] border border-purple rounded-[4px]'>
        <Home width={24} height={25} />
        <p className='text-[24px] text-white uppercase font-extralight'>на головну</p>
      </button>
    </Link>
  );
}