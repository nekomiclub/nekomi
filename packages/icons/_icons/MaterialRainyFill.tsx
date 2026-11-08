import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRainyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M558-83q-11 5-23.5 1T517-97l-69-138q-5-11-1.5-23.5T461-276t23.5-1 17.5 15l69 138q5 11 1.5 23.5T558-83m240-1q-11 5-23.5 1T757-98l-69-138q-5-11-1.5-23.5T701-277t23.5-1 17.5 15l69 138q5 11 1.5 23.5T798-84m-480 0q-11 5-23.5 1.5T277-97l-69-138q-5-11-1-23.5t15-17.5 23.5-1.5T263-263l69 139q5 11 1 23t-15 17m-28-256q-87 0-148.5-61.5T80-550q0-79 56.5-141T277-759q32-56 84.5-88.5T480-880q91 0 152.5 57.5T708-680q79 4 125.5 53.5T880-510q0 70-49.5 120T710-340z" /></svg>;
export default MaterialRainyFill;