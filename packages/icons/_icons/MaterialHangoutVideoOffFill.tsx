import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHangoutVideoOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M843-28 702-169H152q-24 0-42-18t-18-42v-494q0-24 18-42t42-18h22l11 11v86L38-833l43-43L886-71zm22-146L724-315v-321L568-512v-127H400L243-796h585q24 0 42 18t18 42v507q0 20-6 34t-17 21M257-329h286L257-615z" /></svg>;
export default MaterialHangoutVideoOffFill;