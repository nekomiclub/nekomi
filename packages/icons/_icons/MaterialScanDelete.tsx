import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScanDelete: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-820v186zv680-11.5 11.5zm0 740q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v227q-14-6-29-9.5t-31-5.5v-185H551v-186H220v680h316q10 17 22 32t27 28zm416-34-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83z" /></svg>;
export default MaterialScanDelete;