import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSportsEsportsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M147-200q-38 0-59.5-25.5T72-296l48-335q8-53 49.5-91t94.5-38h433q53 0 94.5 38t49.5 91l47 335q6 45-15.5 70.5T813-200q-23 0-39-7.5T747-226L643-330H317L213-226q-11 11-27 18.5t-39 7.5m581-252q12-12 12-28t-12-28-28-12-28 12-12 28 12 28 28 12 28-12m-85-130q12-12 12-28t-12-28-28-12-28 12-12 28 12 28 28 12 28-12M300-445h50v-75h75v-50h-75v-75h-50v75h-75v50h75z" /></svg>;
export default MaterialSportsEsportsFill;