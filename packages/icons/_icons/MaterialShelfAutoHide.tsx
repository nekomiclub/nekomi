import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShelfAutoHide: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600zm300 500q17 0 28.5-11.5T520-320t-11.5-28.5T480-360t-28.5 11.5T440-320t11.5 28.5T480-280m-131.5-11.5Q360-303 360-320t-11.5-28.5T320-360t-28.5 11.5T280-320t11.5 28.5T320-280t28.5-11.5M640-280q17 0 28.5-11.5T680-320t-11.5-28.5T640-360t-28.5 11.5T600-320t11.5 28.5T640-280" /></svg>;
export default MaterialShelfAutoHide;