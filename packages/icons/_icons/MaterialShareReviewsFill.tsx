import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShareReviewsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M580-370q29 0 49.5-20.5T650-440t-20.5-49.5T580-510q-15 0-28 5.5T529-488l-120-60q1-3 1-6v-12q0-3-1-6l120-60q10 11 23 16.5t28 5.5q29 0 49.5-20.5T650-680t-20.5-49.5T580-750t-49.5 20.5T510-680v6q0 3 1 6l-120 60q-10-11-23-16.5t-28-5.5q-29 0-49.5 20.5T270-560t20.5 49.5T340-490q15 0 28-5.5t23-16.5l120 60q-1 3-1 6v6q0 29 20.5 49.5T580-370M80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240z" /></svg>;
export default MaterialShareReviewsFill;