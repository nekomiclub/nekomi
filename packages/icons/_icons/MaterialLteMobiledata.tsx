import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLteMobiledata: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-320v-320h60v260h123v60zm288 0v-260h-85v-60h230v60h-85v260zm209 0v-320h183v60H717v70h123v60H717v70h123v60z" /></svg>;
export default MaterialLteMobiledata;