import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material4gPlusMobiledataFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M815-365v-85h-85v-60h85v-85h60v85h85v60h-85v85zm-615 85v-125H40v-275h60v215h100v-215h60v215h48v60h-48v125zm476-230v170q0 24.75-17.62 42.37Q640.75-280 616-280H427q-24.75 0-42.37-17.63Q367-315.25 367-340v-280q0-24.75 17.63-42.38Q402.25-680 427-680h189q23.51 0 40.26 17.5Q673-645 676-620H427v280h189v-110h-80v-60z" /></svg>;
export default Material4gPlusMobiledataFill;