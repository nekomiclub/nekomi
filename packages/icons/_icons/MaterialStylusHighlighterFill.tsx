import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStylusHighlighterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M281-326v-454q0-24.75 17.69-42.38Q316.38-840 341.22-840q6.78 0 13.36 1.5 6.57 1.5 12.42 4.5l277 134q16 8 25 22.47t9 31.53v320zM160-120l21.27-57.06Q189-199 207.84-212.5T250-226h460q23.32 0 42.16 13.5t26.57 35.44L800-120z" /></svg>;
export default MaterialStylusHighlighterFill;