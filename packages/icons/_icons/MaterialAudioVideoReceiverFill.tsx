import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAudioVideoReceiverFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M190-200q-12 0-21-9t-9-21v-50h-20q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h680q24 0 42 18t18 42v360q0 24-18 42t-42 18h-20v50q0 12-8.5 21t-21.5 9q-12 0-21-9t-9-21v-50H220v50q0 12-8.5 21t-21.5 9m546.5-263.5Q760-487 760-520t-23.5-56.5T680-600t-56.5 23.5T600-520t23.5 56.5T680-440t56.5-23.5M240-440h300v-160H240z" /></svg>;
export default MaterialAudioVideoReceiverFill;