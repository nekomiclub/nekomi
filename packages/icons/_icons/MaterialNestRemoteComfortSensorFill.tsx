import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestRemoteComfortSensorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M373.5-163.5Q330-207 330-270t43.5-106.5T480-420t106.5 43.5T630-270t-43.5 106.5T480-120t-106.5-43.5M122-640l-44-41q80-76 182-117.5T480-840t220 41.5T882-681l-44 41q-72-67-162-103.5T480-780t-196 36.5T122-640m570 148q-43-36-97-57t-115-21-114.5 21-97.5 57l-44-42q51-45 117-70.5T480-630t138.5 25.5T735-534z" /></svg>;
export default MaterialNestRemoteComfortSensorFill;