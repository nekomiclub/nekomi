import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVr180Create2dFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-24 0-42-18t-18-42v-340q0-24 18-42t42-18h340q24 0 42 18t18 42v340q0 24-18 42t-42 18zm29-104h283l-89-117-72 97-57-71zm-149-58q-119-23-199.5-114T80-568q0-130 91-221t221-91q121 0 211 80t111 200H480q-50 0-85 35t-35 85z" /></svg>;
export default MaterialVr180Create2dFill;