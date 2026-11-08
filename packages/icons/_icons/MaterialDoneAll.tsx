import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoneAll: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M294-242 70-466l43-43 181 181 43 43zm170 0L240-466l43-43 181 181 384-384 43 43zm0-170-43-43 257-257 43 43z" /></svg>;
export default MaterialDoneAll;