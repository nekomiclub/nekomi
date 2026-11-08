import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNightlight: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M593-80q-88.11 0-166.56-32.5Q348-145 288.43-200.41t-94-129.62Q160-404.25 160-488.13q0-83.87 34.5-158.37t94-130 137.94-88Q504.89-897 593-897q47 0 88 10t79 27q-90 64-146 160t-56 211.5 56 212T760-117q-38 17-79 27t-88 10m0-60h26.42q12.58 0 20.58-1-66-74-104-162t-38-185 38-185 104-163q-8-1-20.58-1H593q-153 0-263 101.96t-110 247T330-241.5 593-140m-95-349" /></svg>;
export default MaterialNightlight;