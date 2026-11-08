import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLineAxis: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m140-185-46-46 300-300 160 161 93-104-249-238-258 258-46-46 300-300 293 280 165-185 42 41-164 185 163 156-43 43-160-153-136 153-160-159z" /></svg>;
export default MaterialLineAxis;