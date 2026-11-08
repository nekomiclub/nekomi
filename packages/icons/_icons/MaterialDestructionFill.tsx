import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDestructionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M190-80q-29 0-49.5-20.5T120-150v-180q0-29 20.5-49.5T190-400h580q29 0 49.5 20.5T840-330v180q0 29-20.5 49.5T770-80zm62-379L63-568l242-41-65-239 201 144 121-217 41 245 236-66-142 203 139 80z" /></svg>;
export default MaterialDestructionFill;