import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSquareFoot: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-120q-33 0-56.5-23.5T120-200v-539q0-37 34.5-51t61.5 13l45 45-42 42 27 27 42-42 117 117-42 42 27 27 42-42 118 118-42 42 27 27 42-42 117 117-42 42 27 27 42-42 45 45q30 30 15 68.5T726-120zm0-80h463L200-663z" /></svg>;
export default MaterialSquareFoot;