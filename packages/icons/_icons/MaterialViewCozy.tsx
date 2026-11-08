import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewCozy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-540H180q-24 0-42-18t-18-42v-180q0-24 18-42t42-18h180q24 0 42 18t18 42v180q0 24-18 42t-42 18m-180-60h180v-180H180zm180 480H180q-24 0-42-18t-18-42v-180q0-24 18-42t42-18h180q24 0 42 18t18 42v180q0 24-18 42t-42 18m-180-60h180v-180H180zm600-360H600q-24 0-42-18t-18-42v-180q0-24 18-42t42-18h180q24 0 42 18t18 42v180q0 24-18 42t-42 18m-180-60h180v-180H600zm180 480H600q-24 0-42-18t-18-42v-180q0-24 18-42t42-18h180q24 0 42 18t18 42v180q0 24-18 42t-42 18m-180-60h180v-180H600zm0-180" /></svg>;
export default MaterialViewCozy;