import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabletAndroid: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-40q-24.75 0-42.37-17.63Q120-75.25 120-100v-760q0-24.75 17.63-42.38Q155.25-920 180-920h600q24.75 0 42.38 17.62Q840-884.75 840-860v760q0 24.75-17.62 42.37Q804.75-40 780-40zm0-150v90h600v-90zm218 65h164v-40H398zM180-250h600v-520H180zm0-580h600v-30H180zm0 0v-30zm0 640v90z" /></svg>;
export default MaterialTabletAndroid;