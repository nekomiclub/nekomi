import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrandAwarenessFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M655-453v-60h145v60zm33 293-119-88 34-47 119 88zm-85-505-34-47 119-88 34 47zM120-360v-240h160l200-200v640L280-360z" /></svg>;
export default MaterialBrandAwarenessFill;