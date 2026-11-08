import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSynagogueFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M750-630v-50q0-36 24.5-60.5T835-765t60.5 24.5T920-680v50zm-710 0v-50q0-36 24.5-60.5T125-765t60.5 24.5T210-680v50zm0 510v-480h170v480zm200 0v-520l240-200 240 200v520H560v-200q0-35-22.5-57.5T480-400t-57.5 22.5T400-320v200zm510 0v-480h170v480zM519-521q16-16 16-39t-16-39-39-16-39 16-16 39 16 39 39 16 39-16" /></svg>;
export default MaterialSynagogueFill;