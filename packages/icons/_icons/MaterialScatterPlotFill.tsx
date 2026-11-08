import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScatterPlotFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M587-163q-43-43-43-105t43-105 105-43 105 43 43 105-43 105-105 43-105-43M163-293q-43-43-43-105t43-105 105-43 105 43 43 105-43 105-105 43-105-43m169-334q-43-43-43-105t43-105 105-43 105 43 43 105-43 105-105 43-105-43" /></svg>;
export default MaterialScatterPlotFill;