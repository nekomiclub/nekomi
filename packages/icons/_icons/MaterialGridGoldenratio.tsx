import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGridGoldenratio: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M377-80v-297H80v-60h297v-87H80v-60h297v-296h60v296h87v-296h60v296h296v60H584v87h296v60H584v297h-60v-297h-87v297zm60-357h87v-87h-87z" /></svg>;
export default MaterialGridGoldenratio;