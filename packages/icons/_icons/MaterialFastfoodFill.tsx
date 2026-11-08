import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFastfoodFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-304q0-109 93-171t211-62 211 62 93 171zm0 132v-68h608v68zM70-40q-12.75 0-21.37-8.63Q40-57.25 40-70v-38h608v38q0 12.75-8.62 21.37Q630.75-40 618-40zm638 0v-275q0-105.45-70.5-182.23Q567-574 463-595l-17-145h205v-180h60v180h209L852-94q-2.31 23.25-19.66 38.62Q815-40 792-40z" /></svg>;
export default MaterialFastfoodFill;