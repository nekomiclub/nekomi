import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSteppersFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M98-398q-33-33-33-82t33-82 82-33 82 33 33 82-33 82-82 33-82-33m121.5-42.5Q235-456 235-480t-15.5-39.5T180-535t-39.5 15.5T125-480t15.5 39.5T180-425t39.5-15.5M398-398q-33-33-33-82t33-82 82-33 82 33 33 82-33 82-82 33-82-33m121.5-42.5Q535-456 535-480t-15.5-39.5T480-535t-39.5 15.5T425-480t15.5 39.5T480-425t39.5-15.5M698-398q-33-33-33-82t33-82 82-33 82 33 33 82-33 82-82 33-82-33" /></svg>;
export default MaterialSteppersFill;