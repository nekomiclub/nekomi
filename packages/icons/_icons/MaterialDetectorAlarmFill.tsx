import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDetectorAlarmFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-120v-200h60v200zm327-115L636-376l42-43 141 142zm-594 0-42-42 141-142 43 43zm118-425 18 60h322l18-60zm18 120q-20 0-35.5-11.5T262-582l-25-78h-57q-25 0-42.5-17.5T120-720v-120h720v120q0 25-17.5 42.5T780-660h-57l-30 81q-7 17-22.5 28T636-540z" /></svg>;
export default MaterialDetectorAlarmFill;