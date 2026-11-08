import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStackedLineChartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m140-85-46-46 300-300 160 161 298-335 42 41-340 384-160-159zm0-269-46-46 300-300 160 161 298-335 42 41-340 384-160-159z" /></svg>;
export default MaterialStackedLineChartFill;