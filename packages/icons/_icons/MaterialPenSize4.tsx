import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPenSize4: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M210-300.14Q210-338 236-364l360-360q26.18-26 64.09-26T724-723.86t26 64T724-596L364-236q-26.18 26-64.09 26T236-236.14t-26-64" /></svg>;
export default MaterialPenSize4;