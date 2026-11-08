import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAlarmAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M449-284h60v-127h126v-61H509v-126h-60v126H323v61h126zM339.5-110q-65.5-28-114-77t-77-114T120-441q0-74 28.5-139.5t77-114.5 114-77T479-800t139.5 28T733-695t77 114.5T838-441q0 75-28 140t-77 114-114.5 77T479-82t-139.5-28M214-867l42 42L92-667l-42-42zm530 0 164 158-42 42-164-158z" /></svg>;
export default MaterialAlarmAddFill;