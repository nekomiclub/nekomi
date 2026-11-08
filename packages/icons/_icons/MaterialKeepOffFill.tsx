import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeepOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M664-840v60h-30v394L320-700v-80h-30v-60zM480-40l-30-30v-241H240v-60l80-77v-84L55-797l42-42L846-89l-42 42-264-264h-30v241z" /></svg>;
export default MaterialKeepOffFill;