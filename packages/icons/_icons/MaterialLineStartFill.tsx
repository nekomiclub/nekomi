import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLineStartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M170-390q-37.8 0-63.9-26.14t-26.1-64T106.1-544t63.9-26q29.09 0 52.54 17Q246-536 255-510h625v60H255q-9 26-32.46 43-23.45 17-52.54 17" /></svg>;
export default MaterialLineStartFill;