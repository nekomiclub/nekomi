import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhotoCameraFrontFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h240l73 87h147q23 0 41.5 18.5T880-693v513q0 24-18.5 42T820-120zm180-166h320v-19q0-42-42.5-65T480-393t-117.5 23-42.5 65zm211.5-195.5Q553-503 553-533t-21.5-51.5T480-606t-51.5 21.5T407-533t21.5 51.5T480-460t51.5-21.5" /></svg>;
export default MaterialPhotoCameraFrontFill;