import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAutoAwesomeMotion: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M380-80q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h440q24 0 42 18t18 42v440q0 24-18 42t-42 18zm0-60h440v-440H380zm-180-46v-514q0-24 18-42t42-18h514v60H260v514zM80-306v-514q0-24 18-42t42-18h514v60H140v514zm300 166v-440z" /></svg>;
export default MaterialAutoAwesomeMotion;