import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCrosswordFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M356-79v-237h247v237zM80-356v-247h236v247zm276 0v-247h247v247zm287 0v-247h237v247zm0-287v-237h237v237z" /></svg>;
export default MaterialCrosswordFill;