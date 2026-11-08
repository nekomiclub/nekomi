import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCirclesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M685-919q97 0 165.5 68.5T919-685q0 98-68.5 166.5T685-450q-98 0-166.5-68.5T450-685q0-97 68.5-165.5T685-919m3 529q28 0 55.5-5.5T798-409q-15 140-117.5 234.5T438-80q-74 0-139.5-28t-114-76.5-76.5-114T80-438q0-142 95-245.5T412-798q-12 26-17 55t-5 58q0 123 87 209t211 86" /></svg>;
export default MaterialCirclesFill;