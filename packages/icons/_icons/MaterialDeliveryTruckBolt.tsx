import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeliveryTruckBolt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M188-196q-32-36-27-85H61l13-60h112q15-18 36.5-28.5T270-380t47.5 10.5T354-341h198l92-399H266l13-60h440l-39 170h125l114 152-39 197h-80q5 49-27.5 85T690-160t-82-36-27-85H380q5 49-27.5 85T270-160t-82-36m446-234h215l6-33-80-107H666zm10-310-92 399 8-36zM140-447v-113H60l120-192v112h80zm130 227q21 0 35.5-15t14.5-35q0-21-14.5-35.5T270-320q-20 0-35 14.5T220-270q0 20 15 35t35 15m420 0q21 0 35.5-15t14.5-35q0-21-14.5-35.5T690-320q-20 0-35 14.5T640-270q0 20 15 35t35 15" /></svg>;
export default MaterialDeliveryTruckBolt;