import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArrowsOutwardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m693-293-43-43 114-113H510v-61h254L651-622l43-43 185 186zm-427 0L80-479l186-186 42 43-113 112h255v61H194l114 113z" /></svg>;
export default MaterialArrowsOutwardFill;