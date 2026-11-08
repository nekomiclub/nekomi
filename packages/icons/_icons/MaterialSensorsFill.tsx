import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSensorsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M197-197q-54-54-85.5-126.5T80-480t31.5-156.5T197-763l42 43q-46 46-72.5 107.5T140-480t26.5 132.5T240-239zm113-113q-32-32-51-75.5T240-480t19-94.5 51-75.5l42 43q-24 24-38 56.5T300-480t14 70.5 39 57.5zm113.5-113.5Q400-447 400-480t23.5-56.5T480-560t56.5 23.5T560-480t-23.5 56.5T480-400t-56.5-23.5M650-310l-42-43q24-24 38-56.5t14-70.5-14-70.5-39-57.5l43-42q32 32 51 75.5t19 94.5q0 50-19 93.5T650-310m113 113-42-43q46-46 72.5-107.5T820-480t-26.5-132.5T720-721l43-42q54 55 85.5 127.5T880-480t-31.5 155.5T763-197" /></svg>;
export default MaterialSensorsFill;