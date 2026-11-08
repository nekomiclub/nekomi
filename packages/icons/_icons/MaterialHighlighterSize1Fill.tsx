import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHighlighterSize1Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m268-212-56-56q-9-9-9-21.5t9-21.5l437-437q9-9 21.5-9t21.5 9l56 56q9 9 9 21.5t-9 21.5L310-212q-9 9-21 9t-21-9" /></svg>;
export default MaterialHighlighterSize1Fill;