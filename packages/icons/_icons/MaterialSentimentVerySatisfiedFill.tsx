import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSentimentVerySatisfiedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M601.5-296.5Q657-332 682-393H278q26 61 81 96.5T480-261t121.5-35.5M302-533l45-45 45 45 36-36-81-81-81 81zm267 0 45-45 45 45 36-36-81-81-81 81zM324-111.5Q251-143 197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80t-156-31.5" /></svg>;
export default MaterialSentimentVerySatisfiedFill;