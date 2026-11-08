import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatLetterSpacingWiderFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-640h60v640zm740 0v-640h60v640zM308-284l148-398h48l149 398h-48l-39-111H394l-39 111zm101-151h142l-70-196h-2z" /></svg>;
export default MaterialFormatLetterSpacingWiderFill;