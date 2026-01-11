'use client';

import { FC, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';



/**
 * Define if client is mobile using window inner width. Add "mobile=1" in url if true
 * 
 * @deprecated
 */
const WatchCheckMobile: FC = () => {
  const router = useRouter();
  const pathname = usePathname();



  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.innerWidth >= 640) {
      router.replace(pathname);
    } else {
      router.replace(`${pathname}?mobile=1`);
    }
  }, []);



  return <></>;
};

export default WatchCheckMobile;