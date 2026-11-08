import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNotificationMultipleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M110-80q-24 0-42-18t-18-42v-534h60v534h565v60zm120-120q-24 0-42-18t-18-42v-392q0-19 10-36.5t24-26.5l336-206 64 33-365 227 301 199 300-198q11-8 23-7.5t23 5.5 17.5 15 6.5 24v363q0 24-18 42t-42 18zm302-355L416-671l43-43 73 73 184-184 43 43z" /></svg>;
export default MaterialNotificationMultipleFill;