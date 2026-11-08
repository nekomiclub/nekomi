import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddRowAbove: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-140h600v-269H180zm660 60H120v-720h150v60h-90v271h600v-271h-90v-60h150zM480-409v-60zm-30-251v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAddRowAbove;