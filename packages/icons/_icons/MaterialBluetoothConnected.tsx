import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBluetoothConnected: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M451-94v-314L257-214l-42-42 224-224-224-224 42-42 194 194v-314h30l214 214-172 172 172 172L481-94zm60-458 100-100-100-98zm0 342 100-98-100-100zM165.5-446Q151-460 151-480t14.5-35 34.5-15 34.5 15 14.5 35-14.5 34-34.5 14-34.5-14m560 0Q711-460 711-480t14.5-35 34.5-15 34.5 15 14.5 35-14.5 34-34.5 14-34.5-14" /></svg>;
export default MaterialBluetoothConnected;