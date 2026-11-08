import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material4gMobiledataFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M284-280v-130H120v-270h60v210h104v-210h60v210h85v60h-85v130zm556-232v172q0 24.75-17 42.37Q806-280 781-280H550q-24.75 0-42.37-17.63Q490-315.25 490-340v-280q0-24.75 17.63-42.38Q525.25-680 550-680h231q23.1 0 39.55 18T840-620H550v280h231v-112H678v-60z" /></svg>;
export default Material4gMobiledataFill;