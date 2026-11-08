import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHighlighterSize3Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M310-170 169-311q-9-9-9-21t9-21l437-438q9-9 21.5-9t21.5 9l141 142q9 9 9 21t-9 21L353-170q-9 9-21.5 9t-21.5-9" /></svg>;
export default MaterialHighlighterSize3Fill;