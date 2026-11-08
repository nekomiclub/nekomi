import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUniversalCurrencyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-200v-560h800v560zm120-190h120q17 0 28.5-11.5T360-430v-75q0-14.88-12-24.94T320-540h-70v-50h110v-50H200v150h110v50H200zm232 78h336v-22q0-45-45.5-72T600-433t-122.5 26.77T432-334zm168-176q33 0 56.5-23.5T680-568t-23.5-56.5T600-648t-56.5 23.5T520-568t23.5 56.5T600-488" /></svg>;
export default MaterialUniversalCurrencyFill;