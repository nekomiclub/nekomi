import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTheatersFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-720h60v60h120v-60h280v60h120v-60h60v720h-60v-60H620v60H340v-60H220v60zm60-120h120v-120H220zm0-180h120v-120H220zm0-180h120v-120H220zm400 360h120v-120H620zm0-180h120v-120H620zm0-180h120v-120H620z" /></svg>;
export default MaterialTheatersFill;