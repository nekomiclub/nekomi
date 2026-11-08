import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormsAddOnFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M295-265q21 0 35.5-14.5T345-315t-14.5-36-35.5-15-36 15-15 36 15 35.5 36 14.5m0-330q21 0 35.5-14.5T345-645t-14.5-36-35.5-15-36 15-15 36 15 35.5 36 14.5m185-20h207q12 0 21-9t9-21q0-13-9-21.5t-21-8.5H480q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9m90 495H315q-81 0-138-57t-57-138q0-50 21-94.5t63-70.5q-42-27-63-71.5T120-645q0-81 57-138t138-57h330q81 0 138 57t57 138q0 35-10.5 68T798-518q-7-1-14-1.5t-14-.5q-85 0-150 49.5T531-345h-51q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9h40q-3 45 10 87.5t40 77.5m170 0v-120H620v-60h120v-120h60v120h120v60H800v120z" /></svg>;
export default MaterialFormsAddOnFill;