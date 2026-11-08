import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileTicketFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-40q-25 0-42.5-17.5T200-100v-760q0-24 18-42t42-18h438q25 0 42.5 17.5T758-860v150q18 3 30 17t12 32v74q0 19-12 33t-30 17v437q0 25-17.5 42.5T698-40zm100-280h240q17 0 28.5-11.5T640-360v-80q-17 0-28.5-11.5T600-480t11.5-28.5T640-520v-80q0-17-11.5-28.5T600-640H360q-17 0-28.5 11.5T320-600v80q17 0 28.5 11.5T360-480t-11.5 28.5T320-440v80q0 17 11.5 28.5T360-320m106-66q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6m0-80q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6m0-80q-6-6-6-14t6-14 14-6 14 6 6 14-6 14-14 6-14-6" /></svg>;
export default MaterialMobileTicketFill;