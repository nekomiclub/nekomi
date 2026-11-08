import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLibraryMusic: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M486-333q41 0 70-28.42T585-431v-252h116v-60H545v237q-11-9-26.32-14T486-525q-39.06 0-66.03 27.37-26.97 27.36-26.97 67Q393-391 419.97-362T486-333M260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zm0-60h560v-560H260zM140-80q-24 0-42-18t-18-42v-620h60v620h620v60zm120-740v560z" /></svg>;
export default MaterialLibraryMusic;