import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArrowWarmUpFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-766 242-558l-42-42 280-280 280 280-42 42-208-208v306h-60zm0 506v-140h60v140zm0 180v-120h60v120z" /></svg>;
export default MaterialArrowWarmUpFill;