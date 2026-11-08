import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLtePlusMobiledataBadgeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-320h153v-60h-93v-260h-60zm218 0h60v-260h65v-60H313v60h65zm189 0h153v-60h-93v-70h73v-60h-73v-70h93v-60H567zM100-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h760q24 0 42 18t18 42v270h-50v-50h-60v50h-50v60h50v50h60v-50h50v270q0 24-18 42t-42 18z" /></svg>;
export default MaterialLtePlusMobiledataBadgeFill;