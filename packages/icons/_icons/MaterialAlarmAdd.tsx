import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAlarmAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M449-284h60v-127h126v-61H509v-126h-60v126H323v61h126zM339.5-110q-65.5-28-114-76.5t-77-114T120-440.73q0-74.74 28.5-140Q177-646 225.5-695t114-77T479-800t139.5 28T733-695t77 114.27q28 65.26 28 140 0 74.73-28 140.23t-77 114T618.5-110 479-82t-139.5-28M214-867l42 42L92-667l-42-42zm530 0 164 158-42 42-164-158zM479.04-142Q604-142 691-229.04q87-87.05 87-212Q778-566 690.96-653q-87.05-87-212-87Q354-740 267-652.96q-87 87.05-87 212Q180-316 267.04-229q87.05 87 212 87" /></svg>;
export default MaterialAlarmAdd;