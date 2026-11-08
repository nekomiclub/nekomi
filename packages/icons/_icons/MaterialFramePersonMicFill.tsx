import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFramePersonMicFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-240v-76q0-27 17.5-47.5T260-397q57-29 120-39t126 1q-3 11-4.5 22.5T500-390q0 45 21 85t59 65zm240-240q-51 0-85.5-34.5T320-600q0-50 34.5-85t85.5-35q50 0 85 35t35 85q0 51-35 85.5T440-480M140-80q-24 0-42-18t-18-42v-172h60v172h172v60zM80-648v-172q0-24 18-42t42-18h172v60H140v172zM648-80v-60h172v-172h60v172q0 24-18 42t-42 18zm172-568v-172H648v-60h172q24 0 42 18t18 42v172zM660-240v-62q-43-8-71.5-40.5T560-420h40q0 33 23.5 56.5T680-340t56.5-23.5T760-420h40q0 45-28.5 77.5T700-302v62zm-15.5-154.5Q630-409 630-430v-80q0-21 14.5-35.5T680-560t35.5 14.5T730-510v80q0 21-14.5 35.5T680-380t-35.5-14.5" /></svg>;
export default MaterialFramePersonMicFill;