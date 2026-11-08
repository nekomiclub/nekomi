import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhotoFrameFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M190-120q-13 0-21.5-8.5T160-150v-50h-60q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h760q24 0 42 18t18 42v480q0 24-18 42t-42 18h-60v50q0 13-8.5 21.5T770-120zm30-250h520L580-584 440-404 340-524z" /></svg>;
export default MaterialPhotoFrameFill;