import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLabelOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m747-300-43-43 102-137-195-260H307l-60-60h364q14.25 0 27 6.37 12.75 6.38 21 17.63l222 296zm-607 80h489L140-709zM867 18 660-184q-8 11-21 17.5t-27 6.5H140q-24.75 0-42.37-17.63Q80-195.25 80-220v-520q0-6.97 1.5-12.98Q83-759 85-764l-99-99 43-42L910-24zM385-465" /></svg>;
export default MaterialLabelOff;