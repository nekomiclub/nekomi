import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoveItem: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M824-450H323v-60h501l-89-89 43-43 162 162-162 162-43-43zM580-570v-210H180v600h400v-210h60v210q0 24.75-17.62 42.37Q604.75-120 580-120H180q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h400q24.75 0 42.38 17.62Q640-804.75 640-780v210z" /></svg>;
export default MaterialMoveItem;