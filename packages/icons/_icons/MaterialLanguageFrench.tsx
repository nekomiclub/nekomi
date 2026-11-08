import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLanguageFrench: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-280v-400h280v60H220v120h180v60H220v160zm360 0v-400h220q24.75 0 42.38 17.62Q800-644.75 800-620v120q0 24.94-17.5 42.47T740-440h-26l87 160h-68l-86-160h-67v160zm60-220h160v-120H580z" /></svg>;
export default MaterialLanguageFrench;