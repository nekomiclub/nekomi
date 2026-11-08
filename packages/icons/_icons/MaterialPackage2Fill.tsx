import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPackage2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-85v-378L120-654v344q0 16 8 30t22 22zm60 0 300-173q14-8 22-22t8-30v-345L510-463zm164-542 133-77-297-171q-14-8-30-8t-30 8l-104 60zM480-514l133-78-328-188-132 77z" /></svg>;
export default MaterialPackage2Fill;