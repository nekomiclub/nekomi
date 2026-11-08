import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileSaveOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m824-218-42-42 52-52 42 42zm-64-63-60-60v-78h60zM580 0v-60h232L220-652v432h300v60H220q-24 0-42-18t-18-42v-492L38-834l42-42L896-60V0zm120-479h60v-167L526-880H220q-14 0-24 5t-17 13l42 42h279v200h200zm-179-41" /></svg>;
export default MaterialFileSaveOff;