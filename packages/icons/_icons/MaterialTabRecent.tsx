import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabRecent: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M591-104q-57-57-57-136t57-136 136-57 136 57 57 136-57 136-136 57-136-57m210-35 27-27-84-76v-124h-42v135.78zM520-560h300v84q17 6 31.5 14.5T880-442v-298q0-24-18-42t-42-18H140q-24 0-42 18t-18 42v520q0 24 18 42t42 18h347q-5-14.17-7.5-29.08Q477-204 475-220H140v-520h380zM140-220v-19zv-520z" /></svg>;
export default MaterialTabRecent;