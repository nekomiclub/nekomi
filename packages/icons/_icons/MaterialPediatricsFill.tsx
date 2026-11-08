import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPediatricsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-700q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h130v-90q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v90h130q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5zm20 620q-24.75 0-42.37-17.63Q280-115.25 280-140v-110h160q12.75 0 21.38-8.68 8.62-8.67 8.62-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H280v-110h160q13 0 21.5-8.68 8.5-8.67 8.5-21.5 0-12.82-8.62-21.32-8.63-8.5-21.38-8.5H280v-50q0-50 35-85t85-35h160q50 0 85 35t35 85v390q0 24.75-17.62 42.37Q644.75-80 620-80z" /></svg>;
export default MaterialPediatricsFill;