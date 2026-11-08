import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrick: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-474h123v-166h225v166h104v-166h225v166h123v474zm60-60h680v-354H140zm123-414h105v-106H263zm329 0h105v-106H592zM140-220h680zm123-414h105zm329 0h105z" /></svg>;
export default MaterialBrick;