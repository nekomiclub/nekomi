import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatPaintFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M437-80q-24 0-42-17.5T377-140v-200H220q-24 0-42-18t-18-42v-303q0-55 39.5-96t95.5-41h505v440q0 24-18 42t-42 18H583v200q0 25-18 42.5T523-80zM220-554h520v-226h-56v171h-60v-171h-71v85h-60v-85H295q-32 0-53.5 23T220-703z" /></svg>;
export default MaterialFormatPaintFill;