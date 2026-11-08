import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextRotationNone: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-196v-60h566l-52-52 42-42 124 124-124 124-42-42 52-52zm126-204 164-440h59l164 440h-55l-43-122H384l-43 122zm114-166h160l-78-222h-4z" /></svg>;
export default MaterialTextRotationNone;