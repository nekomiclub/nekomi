import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMimoDisconnect: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m138-840 59 60h-57v480h455L28-866l43-42 781 788-32 43-168-163 48 46v74H260v-73l47-47H140q-24 0-42-18t-18-42v-480q0-24 17.5-42t40.5-18m682 0q23 0 41.5 18.5T880-780v480q0 22.85-19 40.42Q842-242 820-240v-540H285l-60-60zM367-527" /></svg>;
export default MaterialMimoDisconnect;