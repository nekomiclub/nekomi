import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeliveryTruckSpeedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m22-437 15-60h220l-15 60zm166 241q-32-36-27-85H61l23-96h205l36-146h84l45-180H176l13-50q5-21 21-34t37-13h472l-39 170h125l114 152-39 197h-80q5 49-27.5 85T690-160t-82-36-27-85H380q5 49-27.5 85T270-160t-82-36m-86-387 15-60h260l-15 60zm168 363q21 0 35.5-15t14.5-35q0-21-14.5-35.5T270-320q-20 0-35 14.5T220-270q0 20 15 35t35 15m420 0q21 0 35.5-15t14.5-35q0-21-14.5-35.5T690-320q-20 0-35 14.5T640-270q0 20 15 35t35 15m-56-210h215l6-33-80-107H666z" /></svg>;
export default MaterialDeliveryTruckSpeedFill;