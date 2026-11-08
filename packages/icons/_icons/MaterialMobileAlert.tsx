import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileAlert: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-40q-24.75 0-42.37-17.63Q200-75.25 200-100v-760q0-24 18-42t42-18h438q24.75 0 42.38 17.62Q758-884.75 758-860v150q18 3 30 16.95 12 13.96 12 31.63V-587q0 19-12 33t-30 17v437q0 24.75-17.62 42.37Q722.75-40 698-40zm0-60h438v-760H260zm0 0v-760zm243.5-195.48q9.5-9.48 9.5-23.5t-9.48-23.52-23.5-9.5-23.52 9.48-9.5 23.5 9.48 23.52 23.5 9.5 23.52-9.48M451-396h60v-268h-60z" /></svg>;
export default MaterialMobileAlert;