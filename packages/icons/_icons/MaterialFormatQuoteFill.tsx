import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatQuoteFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m248-240 94-162q-5 1-11 1.5t-11 .5q-66 0-113-47t-47-113 47-113 113-47 113 47 47 113q0 21-5.5 41T458-480L320-240zm360 0 94-162q-5 1-11 1.5t-11 .5q-66 0-113-47t-47-113 47-113 113-47 113 47 47 113q0 21-5.5 41T818-480L680-240z" /></svg>;
export default MaterialFormatQuoteFill;