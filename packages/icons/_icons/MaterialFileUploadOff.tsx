import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileUploadOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m480-800 193 193-43 43-120-120v148l-60-60v-88l-44 44-43-43zm-30 487v-197l60 60v137zM813-61l-99-99H220q-24 0-42-18t-18-42v-143h60v143h434L61-813l43-43 752 752zm-13-181-60-60v-61h60z" /></svg>;
export default MaterialFileUploadOff;