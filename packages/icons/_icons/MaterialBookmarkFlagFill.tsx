import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarkFlagFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M385-405h50v-120h175l-56-75 56-75H385zM200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240z" /></svg>;
export default MaterialBookmarkFlagFill;