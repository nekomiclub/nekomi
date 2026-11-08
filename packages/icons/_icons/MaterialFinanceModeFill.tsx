import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFinanceModeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M318-420v-295h90v295l-45-45zm194 91v-551h90v461zM124-229v-320h90v230zm-4 111 246-246 149 132 262-262h-88v-60h191v190h-60v-88L517-149 368-280 206-118z" /></svg>;
export default MaterialFinanceModeFill;