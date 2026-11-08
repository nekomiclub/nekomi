import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileTicket: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-40q-24.75 0-42.37-17.63Q200-75.25 200-100v-760q0-24 18-42t42-18h438q24.75 0 42.38 17.62Q758-884.75 758-860v150q18 3 30 16.95 12 13.96 12 31.63V-587q0 19-12 33t-30 17v437q0 24.75-17.62 42.37Q722.75-40 698-40zm0-60h438v-760H260zm0 0v-760zm100-220h240q17 0 28.5-11.5T640-360v-80q-17 0-28.5-11.5T600-480t11.5-28.5T640-520v-80q0-17-11.5-28.5T600-640H360q-17 0-28.5 11.5T320-600v80q17 0 28.5 11.5T360-480t-11.5 28.5T320-440v80q0 17 11.5 28.5T360-320m106-66q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6m0-80q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6m0-80q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6" /></svg>;
export default MaterialMobileTicket;