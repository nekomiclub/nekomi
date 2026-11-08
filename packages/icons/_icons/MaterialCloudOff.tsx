import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCloudOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M818-56 703-171H248q-88 0-148-59T40-377q0-80 50.5-134T217-577q2-14 6.5-31.5T236-640L70-806l42-42L861-99zM248-231h397L285-591q-11 15-14.5 34t-3.5 37h-19q-62 0-105 39.5t-43 101 43 105T248-231m606 29-47-47q25-17 39-38t14-50q0-43-31-73.5T755-441h-67v-81q0-88-61-147.5T478.47-729q-28.47 0-60.97 9T358-691l-42-42q36-29 77.5-42.5T478-789q111 0 190.5 79T748-520v21q72-1 122 45t50 117q0 35-16.5 73.5T854-202M583-470" /></svg>;
export default MaterialCloudOff;