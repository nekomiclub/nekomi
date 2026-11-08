import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCommunitiesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M358-319q31 0 53-21.5t22-52.5-22-52.5-53-21.5q-30 0-51.5 21.5T285-393t21.5 52.5T358-319m296.5-21.5Q676-362 676-393t-21.5-52.5T602-467t-52.5 21.5T528-393t21.5 52.5T602-319t52.5-21.5M533-555q22-22 22-53t-22-52-53-21q-30 0-51.5 21.5T407-608q0 31 21 53t52 22 53-22M480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80" /></svg>;
export default MaterialCommunitiesFill;