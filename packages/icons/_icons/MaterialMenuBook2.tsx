import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMenuBook2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-104h-40v-60h40v-146h-40v-60h40v-146h-40v-60h40v-104q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18zm0-60h520v-680H220v104h40v60h-40v146h40v60h-40v146h40v60h-40zm0 0v-680zm165-140h50v-160q28.17-6.86 46.58-27.93Q500-489 500-516.69V-680h-40v151h-30v-151h-40v151h-30v-151h-40v163q0 28 18.42 49.07Q356.83-446.86 385-440zm225 0h50v-400q-50 0-80 30t-30 80v130h60z" /></svg>;
export default MaterialMenuBook2;