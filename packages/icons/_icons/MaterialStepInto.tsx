import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStepInto: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M402-112q-32-32-32-78t32-78 78-32 78 32 32 78-32 78-78 32-78-32m78-298L294-596l42-42 114 113v-354h60v354l113-113 43 42z" /></svg>;
export default MaterialStepInto;