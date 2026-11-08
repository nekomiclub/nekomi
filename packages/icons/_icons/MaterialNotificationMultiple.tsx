import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNotificationMultiple: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M110-80q-24 0-42-18t-18-42v-534h60v534h565v60zm430-310L230-598v338h620v-338zM230-200q-24 0-42-18t-18-42v-392q0-19.22 10-36.61T204-715l336-206 64 33-365 227 301 199 300-198q11.41-8 23.21-7.5Q875-667 886-662t17.5 15 6.5 24v363q0 24-18 42t-42 18zm302-355L416-671l43-43 73 73 184-184 43 43zm8 295h310-620z" /></svg>;
export default MaterialNotificationMultiple;