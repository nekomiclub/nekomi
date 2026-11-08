import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCameraVideoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M409-489q-29-29-29-71t29-71 71-29 71 29 29 71-29 71-71 29-71-29M257-613q12 0 21-9t9-21q0-13-9-21.5t-21-8.5q-13 0-21.5 8.5T227-643q0 12 8.5 21t21.5 9m-97 493v-60h137l26-102q-103-14-173-92.5T80-560q0-117 81.5-198.5T360-840h240q117 0 198.5 81.5T880-560q0 107-70 185.5T637-282l26 102h137v60zm433-327q47-47 47-113t-47-113-113-47-113 47-47 113 47 113 113 47 113-47" /></svg>;
export default MaterialCameraVideoFill;