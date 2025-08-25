'use client';

import { FC, useEffect } from 'react';



interface IUserLibRenameTitleProps {
  title: string
}



export const UserLibRenameTitle: FC<IUserLibRenameTitleProps> = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, []);

  return <></>;
};