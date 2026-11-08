import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNightlifeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M177-160v-60h84v-204L40-760h502L321-424v204h84v60zm23-454h182l55-86H145zm352.5 421.5Q520-225 520-275t32.5-82.5T635-390q15 0 28.5 3t26.5 8v-381h190v99H750v386q0 50-32.5 82.5T635-160t-82.5-32.5" /></svg>;
export default MaterialNightlifeFill;