'use client'

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import { routes } from '../../routes';

const Watch: NextPage = (props) => {
  const router = useRouter()

  useEffect(() => {
    router.replace(routes.home.path)
  }, [])

  return (
    <div className="page"></div>
  );
}

export default Watch;