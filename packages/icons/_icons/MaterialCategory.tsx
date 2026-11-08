import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCategory: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m261-526 220-354 220 354zM706-80q-74 0-124-50t-50-124 50-124 124-50 124 50 50 124-50 124-124 50m-586-25v-304h304v304zm586.08-35Q754-140 787-173.08q33-33.09 33-81Q820-302 786.92-335q-33.09-33-81-33Q658-368 625-334.92q-33 33.09-33 81Q592-206 625.08-173q33.09 33 81 33M180-165h184v-184H180zm189-421h224L481-767zm337 332" /></svg>;
export default MaterialCategory;