import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestTag: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M479.87-80Q367-80 288.5-158.67 210-237.33 210-350.27q0-90.73 55-163.45 55-72.73 145-98.28v-238q0-12 8.63-21 8.62-9 21.37-9h80q12 0 21 9t9 21v238q89 25.55 144.5 98.28Q750-441 750-350.27q0 112.94-79.11 191.6Q591.78-80 479.87-80m.02-60q87.11 0 148.61-60.87T690-349.89q0-87.11-61.38-148.61Q567.23-560 480.14-560 392-560 331-498.62q-61 61.39-61 148.48Q270-262 330.87-201t149.02 61" /></svg>;
export default MaterialNestTag;