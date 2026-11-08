import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLaptopMacFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M57-160q-24 0-40.5-17.5T0-220h141q-24 0-42-18t-18-42v-500q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.5 42.5T900-160zm447-32q10-10 10-24t-10-24-24-10-24 10-10 24 10 24 24 10 24-10" /></svg>;
export default MaterialLaptopMacFill;