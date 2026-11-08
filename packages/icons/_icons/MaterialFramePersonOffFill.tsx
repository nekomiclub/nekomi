import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFramePersonOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m833-41-39-39H648v-60h86L634-240H240v-76q0-20 10-36.5t27-29.5q33-26 80-39.5t79-16.5L140-734v86H80v-146l-54-54 43-43L876-84zM600-600q0 32-15 58t-39 42L380-666q16-24 42-39t58-15q50 0 85 35t35 85m280 288v146l-60-60v-86zM140-80q-24 0-42-18t-18-42v-172h60v172h172v60zm680-568v-172H648v-60h172q24 0 42 18t18 42v172zM312-880v60h-86l-60-60z" /></svg>;
export default MaterialFramePersonOffFill;