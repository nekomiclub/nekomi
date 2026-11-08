import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterRetrolux: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m601-81-98-98q-8 47-42 73t-82 26q-56 0-92-36t-36-92 36-92 92-36q20 0 37 4t31 12L240-640l240-240 240 240-208 322v60l133 133zm-173-78q19-19 19-49t-19-49-49-19-49 19-19 49 19 49 49 19 49-19m52-218 160-257-160-160-160 160zm0-209" /></svg>;
export default MaterialFilterRetrolux;