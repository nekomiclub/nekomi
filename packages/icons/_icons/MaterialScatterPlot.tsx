import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScatterPlot: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M587-163q-43-43-43-105t43-105 105-43 105 43 43 105-43 105-105 43-105-43m168-42q25-25 25-63t-25-63-63-25-63 25-25 63 25 63 63 25 63-25m-592-88q-43-43-43-105t43-105 105-43 105 43 43 105-43 105-105 43-105-43m167.5-42.5Q356-361 356-398t-25.5-62.5T268-486t-62.5 25.5T180-398t25.5 62.5T268-310t62.5-25.5M332-627q-43-43-43-105t43-105 105-43 105 43 43 105-43 105-105 43-105-43m168-42q25-25 25-63t-25-63-63-25-63 25-25 63 25 63 63 25 63-25m-63-63" /></svg>;
export default MaterialScatterPlot;