import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBia: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-220h110v-130h60v130h100v-130h60v130h100v-130h60v130h190v-310q-35 25-82 37.5T640-480q-56 0-107-15t-86-45H140zm120-380h146q-3-9-4.5-19t-1.5-21q0-17 4-31.5t11-28.5H260zm503 38.5q57-21.5 57-78.5t-57-78.5T640-740t-123 21.5-57 78.5 57 78.5T640-540t123-21.5M80-160v-440h120v-160h275q34-20 77-30t88-10q91 0 165.5 39.5T880-640v480zm60-60h680z" /></svg>;
export default MaterialBia;