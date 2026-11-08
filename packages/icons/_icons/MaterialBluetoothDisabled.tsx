import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBluetoothDisabled: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M806-56 624-238 480-94h-30v-314L256-214l-42-42 196-196L56-806l42-42L848-98zM510-210l70-70-70-70zm26-284-42-43 116-115-100-98v229l-60-60v-285h30l214 214z" /></svg>;
export default MaterialBluetoothDisabled;