import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRamenDiningFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M316-80v-78q-105-42-167-122T80-460h80v-340l720-80v50l-470 52v87h470v50H410v181h470q-6 100-69.5 180T643-158v78zm-6-611h50v-82l-50 6zm-100 0h50v-71l-50 5.68zm100 231h50v-181h-50zm-100 0h50v-181h-50z" /></svg>;
export default MaterialRamenDiningFill;