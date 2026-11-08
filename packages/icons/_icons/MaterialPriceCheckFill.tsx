import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPriceCheckFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M270-362v-45H160v-60h220v-105H191q-12 0-21.5-9t-9.5-22v-164q0-13 9-21.5t21-8.5h80v-45h60v45h110v60H220v105h189q13 0 22 8.5t9 22.5v164q0 12-8.5 21t-21.5 9h-80v45zm288 240L388-292l42-42 128 128 240-240 42 42z" /></svg>;
export default MaterialPriceCheckFill;