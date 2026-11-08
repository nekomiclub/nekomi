import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSentimentDissatisfiedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M626-533q22.5 0 38.25-15.5T680-587t-15.75-38.5T626-641t-38.25 15.5T572-587t15.75 38.5T626-533m-292 0q22.5 0 38.25-15.5T388-587t-15.75-38.5T334-641t-38.25 15.5T280-587t15.75 38.5T334-533m24.5 153.5Q304-342 278-280h53q22-42 62.17-65 40.18-23 87.5-23 47.33 0 86.83 23.5T630-280h52q-25-63-79.83-100-54.82-37-122-37-67.17 0-121.67 37.5m-34.5 268Q251-143 197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80t-156-31.5" /></svg>;
export default MaterialSentimentDissatisfiedFill;