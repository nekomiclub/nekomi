import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwipeRightAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-280q-83 0-141.5-58.5T160-480t58.5-141.5T360-680q82 0 133.5 50.5T559-510h207l-89-89 42-42 161 161-161 161-42-42 89-89H559q-14 69-65.5 119.5T360-280" /></svg>;
export default MaterialSwipeRightAltFill;