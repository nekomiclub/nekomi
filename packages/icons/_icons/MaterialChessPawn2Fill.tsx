import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChessPawn2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80q3-96 58.5-172.5T363-364q-37-28-58-69t-21-87q0-57 29-104t80-72q-13-15-19.5-33.5T367-768q0-47 33-80t80-33 80 33 33 80q0 20-6 38.5T568-696q51 25 79.5 72T676-520q0 46-21 87t-58 69q89 35 144.5 111.5T800-80z" /></svg>;
export default MaterialChessPawn2Fill;