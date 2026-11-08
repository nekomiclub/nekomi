import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeckFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-80v-520H80l400-280 400 280H510v520zm-330 0v-211L88-466l58-10 32 166h162v230h-60v-170H180v170zm500 0v-230h162l32-166 58 10-32 175v211h-60v-170H680v170z" /></svg>;
export default MaterialDeckFill;