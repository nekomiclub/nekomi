import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHighlighterSize2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m282-198-84-84q-9-9-9-21.5t9-21.5l437-437q9-9 21.5-9t21.5 9l84 85q8 9 8.5 21t-8.5 21L325-198q-9 9-21.5 9t-21.5-9" /></svg>;
export default MaterialHighlighterSize2Fill;