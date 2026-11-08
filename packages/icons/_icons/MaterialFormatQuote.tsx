import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatQuote: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m248-240 94-162q-5 1-11 1.5t-11 .5q-66 0-113-47t-47-113 47-113 113-47 113 47 47 113q0 21-5.5 41T458-480L320-240zm360 0 94-162q-5 1-11 1.5t-11 .5q-66 0-113-47t-47-113 47-113 113-47 113 47 47 113q0 21-5.5 41T818-480L680-240zM376.5-503.5Q400-527 400-560t-23.5-56.5T320-640t-56.5 23.5T240-560t23.5 56.5T320-480t56.5-23.5m360 0Q760-527 760-560t-23.5-56.5T680-640t-56.5 23.5T600-560t23.5 56.5T680-480t56.5-23.5M320-560" /></svg>;
export default MaterialFormatQuote;