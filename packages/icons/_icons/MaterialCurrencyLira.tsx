import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCurrencyLira: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M370-120v-224l-130 81v-71l130-81v-118l-130 81v-70l130-82v-236h60v198l170-106v70L430-571v118l170-106v70L430-382v202h19q89 0 149-57.5T660-380h60q-2 111-80 185.5T450-120z" /></svg>;
export default MaterialCurrencyLira;