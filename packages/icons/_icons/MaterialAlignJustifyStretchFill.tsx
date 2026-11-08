import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAlignJustifyStretchFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M820-80v-800h60v800zM80-80v-800h60v800zm430-490v-100h200v100zm-260 0v-100h200v100zm260 280v-100h200v100zm-260 0v-100h200v100z" /></svg>;
export default MaterialAlignJustifyStretchFill;