import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialApprovalFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80v-260q0-24 18-42t42-18h520q24 0 42 18t18 42v260zm60-160h520v-100H220zm260-160L281-680q0-83 58.21-141.5T480-880t140.79 58.5T679-680z" /></svg>;
export default MaterialApprovalFill;