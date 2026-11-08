import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHighChairFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m240-120 41-441-34-196q-4-24 12.5-53.5T330-840q57 0 101 35.5t54 92.5l20 119h185q13 0 21.5 8.5T720-563t-8.5 21.5T690-533h-51l38 413h-60l-8-83H308l-8 83zm73-143h291l-10-105H323zm15-165h260l-9-105H338z" /></svg>;
export default MaterialHighChairFill;