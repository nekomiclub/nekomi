import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHighlighterSize5Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M410-70 70-410q-9-9-9-21t9-21l438-438q8-8 20.5-8t21.5 9l340 339q9 9 9 21t-9 21L452-70q-9 9-21 9t-21-9" /></svg>;
export default MaterialHighlighterSize5Fill;