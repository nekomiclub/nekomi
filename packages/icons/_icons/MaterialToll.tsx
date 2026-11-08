import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialToll: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M373-253q-93-93-93-227t93-227 227-93 227 93 93 227-93 227-227 93-227-93m-79 81q-113-14-183.5-103.5T40-480t70.5-204.5T294-788v58q-88 16-141 87.5T100-480t53 162.5T294-230zm489.5-124.5Q860-373 860-480t-76.5-183.5T600-740t-183.5 76.5T340-480t76.5 183.5T600-220t183.5-76.5" /></svg>;
export default MaterialToll;