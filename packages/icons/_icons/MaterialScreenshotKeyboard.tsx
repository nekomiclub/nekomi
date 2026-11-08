import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScreenshotKeyboard: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480.5-390q-37.5 0-64-26.44T390-480q0-38 26.44-64T480-570q38 0 64 26t26 63.5-26 64-63.5 26.5m106 16.5Q630-417 630-480t-43.5-106.5T480-630t-106.5 43.5T330-480t43.5 106.5T480-330t106.5-43.5M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" /></svg>;
export default MaterialScreenshotKeyboard;