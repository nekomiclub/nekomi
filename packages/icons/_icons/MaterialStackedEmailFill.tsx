import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStackedEmailFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-120q-24 0-42-18.5T40-180v-559h60v559h720v60zm120-120q-24 0-42-18.5T160-300v-480q0-24 18-42t42-18h640q24 0 42 18t18 42v480q0 23-18 41.5T860-240zm320-201 320-262v-77L540-519 220-780v77z" /></svg>;
export default MaterialStackedEmailFill;