import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBluetoothSearchingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M362-94v-314L168-214l-42-42 224-224-224-224 42-42 194 194v-314h30l214 214-172 172 172 172L392-94zm60-458 100-100-100-98zm0 342 100-98-100-100zm237-183-85-87 85-85q8 20 12.5 41.5T676-480q0 23-4.5 44.5T659-393m118 115-44-43q20-37 30.5-77t10.5-82-10.5-82-30.5-77l44-45q29 46 43 98t14 106-14 105-43 97" /></svg>;
export default MaterialBluetoothSearchingFill;