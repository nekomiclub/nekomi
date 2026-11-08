import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPayments: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M540-420q-50 0-85-35t-35-85 35-85 85-35 85 35 35 85-35 85-85 35M220-280q-24.75 0-42.37-17.63Q160-315.25 160-340v-400q0-24.75 17.63-42.38Q195.25-800 220-800h640q24.75 0 42.38 17.62Q920-764.75 920-740v400q0 24.75-17.62 42.37Q884.75-280 860-280zm100-60h440q0-42 29-71t71-29v-200q-42 0-71-29t-29-71H320q0 42-29 71t-71 29v200q42 0 71 29t29 71m480 180H100q-24.75 0-42.37-17.63Q40-195.25 40-220v-460h60v460h700zM220-340v-400z" /></svg>;
export default MaterialPayments;