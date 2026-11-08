import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAltitudeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M730-490v-181l-74 73-42-42 146-146 146 146-42 43-74-74v181zM40-80l240-320 195 260 46-37-124-166 163-217L920-80z" /></svg>;
export default MaterialAltitudeFill;