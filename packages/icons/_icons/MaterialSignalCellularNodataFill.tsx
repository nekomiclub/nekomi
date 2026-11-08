import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignalCellularNodataFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m676-114-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83zM80-80l800-800v466q-29-20-57-28.5t-63-8.5q-88 0-149.5 61.5T549-240q0 48 19 88t54 72z" /></svg>;
export default MaterialSignalCellularNodataFill;