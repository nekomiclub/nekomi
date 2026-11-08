import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkunreadMailboxFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80q-24 0-42-18t-18-42v-425q0-24 18-42t42-18h100v-255h300v160H300v303h60v-208h460q24 0 42 18t18 42v425q0 24-18 42t-42 18z" /></svg>;
export default MaterialMarkunreadMailboxFill;