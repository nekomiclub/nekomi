import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRMobiledata: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-560v-320h221q24 0 42 18t18 42v85q0 19-12 36t-45 21l53 118h-79l-50-115h-88v115zm60-175h161v-85H140z" /></svg>;
export default MaterialRMobiledata;