import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLteMobiledataBadge: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h760q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h760v-600H100zm0 0v-600zm60-140h183v-60H220v-260h-60zm248 0h60v-260h85v-60H323v60h85zm209 0h183v-60H677v-70h83v-60h-83v-70h123v-60H617z" /></svg>;
export default MaterialLteMobiledataBadge;