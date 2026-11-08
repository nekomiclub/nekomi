import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirPurifierFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-572q0-59 44.5-103.5T268-840h304q59 0 103.5 44.5T720-692v44h-60v339h60v189zm406.5-253.5Q570-417 570-480t-43.5-106.5T420-630t-106.5 43.5T270-480t43.5 106.5T420-330t106.5-43.5m-171-42Q330-441 330-480t25.5-64.5T420-570t64.5 25.5T510-480t-25.5 64.5T420-390t-64.5-25.5M689-501v-60h25q14 0 25-6.5t18-21.5q12-26 39-42.5t58-16.5h26v60h-26q-14 0-25 7t-18 20q-14 27-40 43.5T714-501zm0 148v-60h25q14 0 25-6.5t18-21.5q12-27 39-42t58-15h26v60h-26q-14 0-25 5.5T811-413q-14 27-40 43.5T714-353z" /></svg>;
export default MaterialAirPurifierFill;