import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGateFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-200v-410q0-63 44-106.5T350-760h100v250h-80v60h80v250zm310 0v-250h80v-60h-80v-250h100q63 0 106.5 43.5T760-610v410zM80-280v-400h60v400zm740 0v-400h60v400z" /></svg>;
export default MaterialGateFill;