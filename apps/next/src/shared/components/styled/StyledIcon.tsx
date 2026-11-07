'use client';

import { ComponentType, FC, lazy, Suspense, SVGProps } from 'react';
import TMaterialSymbolName from '@nekomi/icons/types';



export type IMaterialSymbolProps = {
  color?: string;
  size?: number;
} & SVGProps<SVGSVGElement>

type IProps = {
  icon: TMaterialSymbolName
} & IMaterialSymbolProps



const getIcon = (icon: TMaterialSymbolName) =>
  lazy(async () => {
    const module = await import(
      `@nekomi/icons/Material${icon}.js`
    );

    return {
      default: module.default as ComponentType<SVGProps<SVGSVGElement>>,
    };
  });

const iconCache = new Map<string, ComponentType<SVGProps<SVGSVGElement>>>();

const StyledIcon: FC<IProps> = ({ icon, ...props }) => {
  let Icon = iconCache.get(icon);

  if (!Icon) {
    Icon = getIcon(icon);
    iconCache.set(icon, Icon);
  }

  return (
    <Suspense fallback={null}>
      {/* eslint-disable-next-line react-hooks/static-components */}
      <Icon {...props} />
    </Suspense>
  );
};

export default StyledIcon;