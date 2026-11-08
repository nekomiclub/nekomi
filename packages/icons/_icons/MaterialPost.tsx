import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPost: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-720h720v720zm640-143H200v78h560zm-560-41h560v-78H200zm0-129h560v-327H200zm0 170v78zm0-41v-78zm0-129v-327zm0 51v-51zm0 119v-41z" /></svg>;
export default MaterialPost;