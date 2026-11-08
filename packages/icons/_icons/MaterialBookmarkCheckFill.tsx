import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarkCheckFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m438-424 183-184-42-42-141 141-57-56-42 42zM200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240z" /></svg>;
export default MaterialBookmarkCheckFill;