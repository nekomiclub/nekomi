import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShowerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M298-263q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9m182 0q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9m182 0q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9M200-413v-60q0-107 72.5-187T450-751v-89h60v89q105 11 177.5 91T760-473v60zm98 293q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9m182 0q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9m182 0q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9" /></svg>;
export default MaterialShowerFill;