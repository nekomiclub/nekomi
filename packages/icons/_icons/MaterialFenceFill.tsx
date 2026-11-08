import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFenceFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M210-160v-170h-90v-60h90v-100h-90v-60h90v-140l110-110 80 80 81-80 80 80 80-80 110 110v140h89v60h-89v100h89v60h-89v170zm60-390h100v-115l-50-50-50 50zm160 0h100v-115l-50-50-50 50zm161 0h99v-115l-50-50-49 49zM270-390h100v-100H270zm160 0h100v-100H430zm161 0h99v-100h-99zM270-220h100v-110H270zm160 0h100v-110H430zm161 0h99v-110h-99z" /></svg>;
export default MaterialFenceFill;