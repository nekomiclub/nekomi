import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrandAwareness: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M655-452v-60h145v60zm33 292-119-88 34-47 119 88zm-85-505-34-47 119-88 34 47zM120-361v-240h160l200-200v640L280-361zm300-288L307-541H180v120h127l113 109zm-94 168" /></svg>;
export default MaterialBrandAwareness;