import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContextualTokenAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M740-620v-80h-80v-60h80v-80h60v80h80v60h-80v80zM244-325h266v-102H244zm0-207h266v-102H244zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h475q-8 16-11.5 33.5T600-730q0 18 3.5 35t10.5 33v337h102v-244q13 5 26.5 7t27.5 2q32 0 59.5-10.5T880-600v380q0 24-18 42t-42 18z" /></svg>;
export default MaterialContextualTokenAddFill;