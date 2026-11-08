import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeepOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M664-840v60h-30v394l-60-60v-334H380v140l-60-60v-80h-30v-60zM480-40l-30-30v-241H240v-60l80-77v-84L55-797l42-42L846-89l-42 42-264-264h-30v241zM321-371h159L380-471v45zm59-100" /></svg>;
export default MaterialKeepOff;