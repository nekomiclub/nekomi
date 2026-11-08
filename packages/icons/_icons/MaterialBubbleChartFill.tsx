import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBubbleChartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M507-152.12q-32-32.12-32-78T507.12-308t78-32T663-307.88t32 78T662.88-152t-78 32T507-152.12m5.5-320.44Q450-535.13 450-625.06q0-89.94 62.56-152.44 62.57-62.5 152.5-62.5 89.94 0 152.44 62.56 62.5 62.57 62.5 152.5 0 89.94-62.56 152.44-62.57 62.5-152.5 62.5-89.94 0-152.44-62.56M275-237q-65 0-110-45t-45-110 45-110 110-45 110 45 45 110-45 110-110 45" /></svg>;
export default MaterialBubbleChartFill;