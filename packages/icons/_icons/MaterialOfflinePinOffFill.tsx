import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOfflinePinOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m813-61-95-95q-52 38-113 57T480-80q-83 0-156-31.5T197-197t-85.5-127T80-480q0-64 19-125t57-113l-95-95 43-43 752 752zM320-280h274l-60-60H320zm484 38L539-508l122-122-45-45-122 122-252-251q52-38 113-57t125-19q83 0 156 31.5T763-763t85.5 127T880-480q0 64-19 125t-57 113" /></svg>;
export default MaterialOfflinePinOffFill;