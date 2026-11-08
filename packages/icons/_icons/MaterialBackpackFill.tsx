import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBackpackFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-25 0-42.5-17.5T160-140v-510q0-55 34-95.5t86-50.5v-84h100v80h200v-80h100v84q52 10 86 50.5t34 95.5v510q0 25-17.5 42.5T740-80zm400-250h60v-140H280v60h340z" /></svg>;
export default MaterialBackpackFill;