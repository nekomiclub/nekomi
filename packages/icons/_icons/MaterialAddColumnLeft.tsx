import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddColumnLeft: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M820-180v-600H551v600zm-660 60v-150h60v90h271v-600H220v90h-60v-150h720v720zm391-360h-60zM160-370v-80H80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAddColumnLeft;