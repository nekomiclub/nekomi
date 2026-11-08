import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEarthquake: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-80q-10 0-18-5.5T331-101L228-450H80v-60h170q10 0 18 5.5t11 15.5l76 256 136-623q2-11 10-17.5t19-6.5 19 6 10 17l94 423 68-225q3-10 11-15.5t18-5.5 17.5 5 10.5 14l54 151h58v60h-80q-10 0-17.5-5.5T772-470l-30-83-74 252q-3 10-11 16t-18 5-18-7-10-16l-91-402-131 602q-2 10-10 16t-19 7" /></svg>;
export default MaterialEarthquake;