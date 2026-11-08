import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabInactiveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M310-80q-24 0-42-18t-18-42v-110H140q-24 0-42-18t-18-42v-75h60v75h110v-340q0-24 18-42t42-18h340v-110h-75v-60h75q24 0 42 18t18 42v110h110q24 0 42 18t18 42v510q0 24-18 42t-42 18zM80-485v-160h60v160zm0-260v-75q0-24 18-42t42-18h75v60h-75v75zm235-75v-60h160v60z" /></svg>;
export default MaterialTabInactiveFill;