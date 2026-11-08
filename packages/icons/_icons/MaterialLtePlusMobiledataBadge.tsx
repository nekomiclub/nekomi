import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLtePlusMobiledataBadge: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-180v-600zm820-460h-60v-140H100v600h760v-140h60v140q0 24-18 42t-42 18H100q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h760q24 0 42 18t18 42zM160-320h153v-60h-93v-260h-60zm218 0h60v-260h65v-60H313v60h65zm189 0h153v-60h-93v-70h73v-60h-73v-70h93v-60H567zm243-80h60v-50h50v-60h-50v-50h-60v50h-50v60h50z" /></svg>;
export default MaterialLtePlusMobiledataBadge;