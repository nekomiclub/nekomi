import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialThumbsUpDownFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M60-400q-24 0-42-18T0-460v-270q0-10 3-18t11-17l195-195 25 28q5 5 8 10.5t3 12.5v8l-31 141h216q21 0 35.5 14.5T480-710v39q0 7-1 12.5t-2 7.5l-93 220q-6 15-19.5 23t-34.5 8zM751 0l-25-28q-5-5-8-10.5T715-51v-8l31-141H530q-21 0-35.5-14.5T480-250v-39q0-7 1-12.5t2-7.5l93-220q6-15 19.5-23t34.5-8h270q24 0 42 18t18 42v270q0 10-3 18t-11 17z" /></svg>;
export default MaterialThumbsUpDownFill;