import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExpandFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80v-60h640v60zm322-100L330-332l43-43 79 79v-368l-79 79-43-43 152-152 152 152-43 43-79-79v368l79-79 43 43zM160-820v-60h640v60z" /></svg>;
export default MaterialExpandFill;