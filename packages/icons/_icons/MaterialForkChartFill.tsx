import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForkChartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-160v-310q-26-7-43-28t-17-50v-192q0-8 6-14t14-6 14 6 6 14v140h30v-140q0-8 6-14t14-6 14 6 6 14v140h30v-140q0-8 6-14t14-6 14 6 6 14v192q0 29-17 50t-43 28v310zm726-524q35 42 54.5 93.85 19.5 51.84 19.5 110.5Q920-421 900.5-369T846-275L642-480zM630-799q50 5 94 24t80 49L630-552zm-30 640q-134.42 0-227.71-93.29T279-480q0-125.03 84-216.51Q447-788 570-799v332.07L804-233q-42 35-94.07 54.5T600-159" /></svg>;
export default MaterialForkChartFill;