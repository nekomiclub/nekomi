import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMosqueFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M304-634q-20 0-37-17t-17-37q0-37 17.5-69.5T316-810l164-110 164 110q31 20 48.5 52.5T710-688q0 20-17 37t-37 17zM40-120v-509q-18-11-29-27T0-692t20.5-49T70-798q29 28 49.5 57t20.5 49-11 36-29 27v189h110v-102q0-24 18.5-43t47.5-19h408q29 0 47.5 19t18.5 43v102h110v-189q-18-11-29-27t-11-36 20.5-49 49.5-57q29 28 49.5 57t20.5 49-11 36-29 27v509H560v-160q0-32-24-56t-56-24-56 24-24 56v160z" /></svg>;
export default MaterialMosqueFill;