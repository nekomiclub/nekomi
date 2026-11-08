import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLibraryMusicFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M486-333q41 0 70-28.5t29-69.5v-252h116v-60H545v237q-11-9-26.5-14t-32.5-5q-39 0-66 27.5T393-431q0 40 27 69t66 29M260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zM140-80q-24 0-42-18t-18-42v-620h60v620h620v60z" /></svg>;
export default MaterialLibraryMusicFill;