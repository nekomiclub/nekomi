import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialElevation: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m82-120 258-360h202l298-348v708zm62-257-48-35 163-228h201l185-215 45 39-202 236H289zm55 197h581v-486L569-420H370zm581 0" /></svg>;
export default MaterialElevation;