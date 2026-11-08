import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddColumnRight: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-780v600h269v-600zM80-120v-720h720v150h-60v-90H469v600h271v-90h60v150zm329-360h60zm331 110v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAddColumnRight;