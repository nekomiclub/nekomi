import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCloudOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M818-56 703-171H248q-88 0-148-59T40-377q0-80 50.5-134T217-577q2-14 6.5-31.5T236-640L70-806l42-42L861-99zm36-146L316-733q36-29 77.5-42.5T478-789q111 0 190.5 79T748-520v21q72-1 122 45t50 117q0 35-16.5 73.5T854-202" /></svg>;
export default MaterialCloudOffFill;