import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialConciergeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M400-80v-60h520v60zm40-120q0-81 51-141.5T620-416v-24q0-17 11.5-28.5T660-480t28.5 11.5T700-440v24q77 14 128.5 74.5T880-200zM40-442h154v-394H40zm215 0h94l290-109q14-5 21.5-16.5T668-593q0-17-12.5-29.5T626-635h-98l-116 38-10-28 116-40h302q25 0 42.5-17.5T880-725v-47l-314-96-311 89z" /></svg>;
export default MaterialConciergeFill;