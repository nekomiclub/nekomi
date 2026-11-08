import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVoicemail2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M644-367q47.08 0 80.04-32.94t32.96-80T724.06-560t-80-33-79.56 32.96T532-480q0 14 3 27.5t10 25.5H414q7-12 10-25.5t3-27.5q0-47.08-32.74-80.04Q361.53-593 314.76-593q-46.76 0-79.26 32.94t-32.5 80T235.67-400q32.66 33 79.33 33zm-366.07-75.5Q263-458 263-480t14.93-37.5 37-15.5 37.57 15.5T368-480t-15.5 37.5-37.57 15.5-37-15.5m329 0Q592-458 592-480t14.93-37.5 37-15.5 37.57 15.5T697-480t-15.5 37.5-37.57 15.5-37-15.5M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" /></svg>;
export default MaterialVoicemail2;