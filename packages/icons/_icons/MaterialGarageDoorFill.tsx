import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGarageDoorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-158v-414H59l421-306 420 306H800v414zm165-60h310v-60H325zm0-120h310v-60H325zm0-120h310v-60H325zm155-197q12 0 21-9t9-21.5-9-21-21.5-8.5-21 8.62Q450-697.75 450-685q0 12 8.63 21 8.62 9 21.37 9" /></svg>;
export default MaterialGarageDoorFill;