import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialResponsiveLayout: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-505h215v-215h505v720zm505-60h155v-600H395v155h230zm-230 0h170v-385H395zm-215 0h155v-385H180zm445-445v60zm0 0" /></svg>;
export default MaterialResponsiveLayout;