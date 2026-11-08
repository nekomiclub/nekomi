import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterDrama: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M251-160q-88 0-149.5-61.5T40-371q0-81 50.5-137.5T217-579q18-94 92.5-157.5T481-800q111 0 189 81.5T748-522v24q75 0 123.5 48.5T920-329q0 69-50 119t-119 50zm0-60h500q45 0 77-32t32-77-32-77-77-32h-63v-84q0-88-59.5-153T481-740q-70 0-129 43.5T275-580q80 11 132 64t52 136h-60q0-63-44-102.5T248-522t-105.5 44T100-371t44 107 107 44" /></svg>;
export default MaterialFilterDrama;