import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHighlighterSize4Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M353-127 127-353q-9-9-9-21.5t9-21.5l437-437q9-9 21-9t21 9l227 226q9 9 9 21.5t-9 21.5L396-127q-9 9-21.5 9t-21.5-9" /></svg>;
export default MaterialHighlighterSize4Fill;