import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPublishFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-160v-371L330-411l-43-43 193-193 193 193-43 43-120-120v371zM160-597v-143q0-24 18-42t42-18h520q24 0 42 18t18 42v143h-60v-143H220v143z" /></svg>;
export default MaterialPublishFill;