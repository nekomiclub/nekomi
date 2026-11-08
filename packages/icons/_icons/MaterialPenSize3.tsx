import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPenSize3: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M218-218q-14-15-14-35.5t14-34.5l454-454q14-14 35-14t35 14 14 35-14 35L288-218q-14 14-35 14t-35-14" /></svg>;
export default MaterialPenSize3;