import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidWifi3BarOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m284-373-71-72q24-21 50.5-37.5T319-512l-130-90q-20 13-39 27t-36 30l-78-79q14-12 28-23.5T92-670l-60-42 46-65 790 552-45 65-400-279q-38 8-73.5 24T284-373m54-296-112-78q60-26 124-39t130-13q125 0 239 45t205 130l-78 79q-75-69-169.5-106T480-688q-36 0-71.5 4.5T338-669m92.5 487.5Q410-202 410-231t20.5-49.5T480-301t49.5 20.5T550-231t-20.5 49.5T480-161t-49.5-20.5" /></svg>;
export default MaterialAndroidWifi3BarOff;