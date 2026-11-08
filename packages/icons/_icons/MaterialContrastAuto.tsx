import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContrastAuto: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880h4q-39 38-61.5 89.5T400-680q0 65 27 120.5t73 93.5v326q125-9 213.5-91.5T817-436q17-10 33-22t30-26q0 83-31.5 156.5T763-199t-127 87-156 32m37-434 150-385h53l150 385h-56l-43-112H616l-43 112zm115-159h123l-54-148h-15z" /></svg>;
export default MaterialContrastAuto;