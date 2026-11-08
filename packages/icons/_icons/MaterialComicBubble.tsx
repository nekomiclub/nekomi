import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialComicBubble: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m440-831-91.21 91.21H220.21v128.58L129-520l91.21 91.21v128.58h128.58L440-209l104-104 210 107-108-209 105-105-91.21-91.21v-128.58H531.21zm0-85 116 116h164v164l116 116-116 116 129 253q5 10 3.5 19t-8.5 16-16 8.5-19-3.5L556-240 440-124 324-240H160v-164L44-520l116-116v-164h164zm1 398" /></svg>;
export default MaterialComicBubble;