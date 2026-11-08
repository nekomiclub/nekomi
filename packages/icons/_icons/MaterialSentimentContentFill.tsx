import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSentimentContentFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-340h240v-60H360zm-36 228.5Q251-143 197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80t-156-31.5M340-620q-32 0-59.5 18T235-556l50 33q10-15 24-25.5t31-10.5 31 10.5 24 24.5l50-33q-18-27-45.5-45T340-620m280 0q-32 0-59.5 18T515-556l50 33q10-14 24-24.5t31-10.5 31.5 10 23.5 25l50-33q-18-28-45.5-46T620-620" /></svg>;
export default MaterialSentimentContentFill;