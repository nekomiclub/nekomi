import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRamenDining: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M376-140h207v-56l36-15q74-31 121.5-80.5T808-400H152q20 59 68 109t120 80l36 15zm-60 60v-78q-105-42-167-122T80-460h80v-340l720-80v50l-470 52v87h470v50H410v181h470q-6 100-69.5 180T643-158v78zm-6-611h50v-82l-50 6zm-100 0h50v-71l-50 6zm100 231h50v-181h-50zm-100 0h50v-181h-50zm270 60" /></svg>;
export default MaterialRamenDining;