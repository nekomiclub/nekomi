import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWaterPumpFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m480-584-32 47q-24 36-31 52t-7 39q0 29 20.5 49.5T480-376t49.5-20.5T550-446q0-23-7-39t-31-52zM303-303q-73-73-73-177t73-177 177-73 177 73 73 177-73 177-177 73-177-73m557-177v-40h-73q-11-80-57.5-143.5T613-760h247v-40h60v320zM40-160v-320h60v40h73q11 80 57.5 143.5T347-200H100v40z" /></svg>;
export default MaterialWaterPumpFill;