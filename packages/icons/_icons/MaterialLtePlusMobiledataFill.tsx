import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLtePlusMobiledataFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-320v-320h60v260h123v60zm257 0v-260h-84v-60h228v60h-84v260zm200 0v-320h183v60H557v70h123v60H557v70h123v60zm319-46v-84h-84v-60h84v-84h60v84h84v60h-84v84z" /></svg>;
export default MaterialLtePlusMobiledataFill;