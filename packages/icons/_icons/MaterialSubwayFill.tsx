import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSubwayFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-534q0-82 42.5-144T241-850q56-21 119-25.5t120-4.5 120.5 4.5T720-850q76 30 118 92t42 144v534zm267-60 81-81h104l81 81h48v-20l-61-61q47 0 83.5-31.5T720-340v-263q0-72-75-94.5T480-720q-106 0-173 22.5T240-603v263q0 60 41 89.5t79 29.5l-61 61v20zm-62-288v-175h390v175zm307 116q-11-11-11-28t11-28 28-11 28 11 11 28-11 28-28 11-28-11m-280 0q-11-11-11-28t11-28 28-11 28 11 11 28-11 28-28 11-28-11" /></svg>;
export default MaterialSubwayFill;