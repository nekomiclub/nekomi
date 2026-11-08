import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatH6: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-280v-400h60v170h180v-170h60v400h-60v-170H180v170zm480 0q-24.75 0-42.37-17.63Q540-315.25 540-340v-280q0-24.75 17.63-42.38Q575.25-680 600-680h240v60H600v110h180q24.75 0 42.38 17.62Q840-474.75 840-450v110q0 24.75-17.62 42.37Q804.75-280 780-280zm0-170v110h180v-110z" /></svg>;
export default MaterialFormatH6;