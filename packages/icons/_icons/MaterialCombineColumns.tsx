import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCombineColumns: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-370v-80h-80v-60h80v-80h60v80h80v60h-80v80zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h210q24 0 42 18t18 42v133h-60v-133H180v600h210v-133h60v133q0 24-18 42t-42 18zm390 0q-24 0-42-18t-18-42v-133h60v133h210v-600H570v133h-60v-133q0-24 18-42t42-18h210q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialCombineColumns;