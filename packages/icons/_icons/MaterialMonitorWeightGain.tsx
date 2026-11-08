import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMonitorWeightGain: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M730-360h60v130h130v60H790v130h-60v-130H600v-60h130zM180-180v-600zm300.5-545q-50.5 0-84.5 34t-34 84.5 34 84 84.5 33.5 84-33.5 33.5-84-33.5-84.5-84-34M431-621q6 6 6 14t-6 14-14 6-14-6-6-14 6-14 14-6 14 6m63 0q6 6 6 14t-6 14-14 6-14-6-6-14 6-14 14-6 14 6m63 0q6 6 6 14t-6 14-14 6-14-6-6-14 6-14 14-6 14 6M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v361h-60v-361H180v600h361v60z" /></svg>;
export default MaterialMonitorWeightGain;