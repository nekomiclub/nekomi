import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextAdOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M210-290v-60h400l60 60zm0-160v-60h240l60 60zm0-160v-60h80l60 60zm386 160h154v-60H536zM436-610h152v-60H376zm429 429-45-45v-514H306l-60-60h574q24 0 42 18t18 42v520.16q0 10.84-4 20.84t-11 18M813-61l-99-99H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h20l60 60h-80v520h514L26-848l43-43 787 787z" /></svg>;
export default MaterialTextAdOff;