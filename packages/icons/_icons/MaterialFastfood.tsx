import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFastfood: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M575-364q-23-52-90.5-82.5T344-477t-140.5 30.5T112-364zM40-304q0-109 93-171t211-62 211 62 93 171zm0 128v-60h608v60zM708-40v-60h86l57-580H453l-7-60h205v-180h60v180h209l-67 640q-3.09 25.86-22.67 42.93Q810.76-40 785-40zm0-60h86zM70-40q-12.75 0-21.37-8.63Q40-57.25 40-70v-30h608v30.18q0 12.82-8.62 21.32Q630.75-40 618-40zm274-324" /></svg>;
export default MaterialFastfood;