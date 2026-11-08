import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEditLine: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m334-120 70-70h476v70zm-154-60h44l472-471-44-44-472 471zm-60 60v-128l575-574q8.11-8.13 19.16-12.57Q725.21-839 737-839q11 0 21.96 4.6 10.97 4.61 20.04 12.4l44.17 43.65Q832-769 836-758.13q4 10.88 4 22.13 0 11-4.5 22.5T823-694L248-120zm659-617-41-41zm-105 64-22-22 44 44z" /></svg>;
export default MaterialEditLine;