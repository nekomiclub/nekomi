import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBluetoothFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-94v-314L256-214l-42-42 224-224-224-224 42-42 194 194v-314h30l214 214-172 172 172 172L480-94zm60-458 100-100-100-98zm0 342 100-98-100-100z" /></svg>;
export default MaterialBluetoothFill;