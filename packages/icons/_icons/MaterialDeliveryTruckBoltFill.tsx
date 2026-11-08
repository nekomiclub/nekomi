import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeliveryTruckBoltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-447v-113H60l120-192v112h80zm130 287q-46 0-78-32t-32-78q0-20 5-40t16-38l233-392H266l13-60h440l-39 170h125l114 152-39 197h-80q5 49-28 85t-82 36-81.5-36-27.5-85H380q5 49-28 85t-82 36m0-60q21 0 35.5-15t14.5-35q0-21-14.5-35.5T270-320q-20 0-35 14.5T220-270q0 20 15 35t35 15m420 0q21 0 35.5-15t14.5-35q0-21-14.5-35.5T690-320q-20 0-35 14.5T640-270q0 20 15 35t35 15m-56-210h215l6-33-80-107H666z" /></svg>;
export default MaterialDeliveryTruckBoltFill;