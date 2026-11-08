import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHdrStrongFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M185-330q-61 0-103-42T40-475q0-62 42-103.5T185-620q62 0 103.5 41.5T330-475q0 61-41.5 103T185-330m62-83q23-23 23-62t-23-62-62-23-62 23-23 62 23 62 62 23 62-23m263.5 102.5Q440-381 440-480t70.5-169.5T680-720t169.5 70.5T920-480t-70.5 169.5T680-240t-169.5-70.5" /></svg>;
export default MaterialHdrStrongFill;