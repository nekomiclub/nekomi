import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRoundaboutLeftFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M610-120v-242q0-23 14-40t36-20q69-8 114.5-58.5T820-600q0-75-52.5-127.5T640-780q-69 0-120 46t-59 115q-2 22-19.5 35.5T401-570H194l90 90-42 42L80-600l162-162 42 42-90 90h208q11-91 79-150.5T640-840q100 0 170 70t70 170q0 91-59.5 159T670-362v242z" /></svg>;
export default MaterialRoundaboutLeftFill;