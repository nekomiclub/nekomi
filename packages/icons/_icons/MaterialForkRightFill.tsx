import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForkRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M372-120v-606l-90 90-42-42 162-162 162 162-42 42-90-90v320q30-33 71.5-54T607-481q16 0 38 3t41 8l-90-90 42-42 162 162-162 162-42-42 90-90q-16-5-38-8t-45-3q-57 0-104.5 34T432-290v170z" /></svg>;
export default MaterialForkRightFill;