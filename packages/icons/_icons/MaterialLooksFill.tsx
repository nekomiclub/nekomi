import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLooksFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-280q0-91 34.5-171T169-591t140-94.5T480-720t171 34.5T791-591t94.5 140T920-280h-60q0-158-111-269T480-660 211-549 100-280zm120 0q0-134 93-227t227-93 227 93 93 227h-60q0-109-75.5-184.5T480-540t-184.5 75.5T220-280z" /></svg>;
export default MaterialLooksFill;