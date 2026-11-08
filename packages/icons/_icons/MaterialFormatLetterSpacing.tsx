import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatLetterSpacing: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M307-80 161-226l146-145 42 42-74 73h410l-72-73 42-42 145 145L654-80l-42-42 74-74H276l72 74zM200-480v-400h60v400zm250 0v-400h60v400zm250 0v-400h60v400z" /></svg>;
export default MaterialFormatLetterSpacing;