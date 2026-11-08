import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTollFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M373-253q-93-93-93-227t93-227 227-93 227 93 93 227-93 227-227 93-227-93m-79 81q-113-14-183.5-103.5T40-480t70.5-204.5T294-788v58q-88 16-141 87.5T100-480t53 162.5T294-230z" /></svg>;
export default MaterialTollFill;