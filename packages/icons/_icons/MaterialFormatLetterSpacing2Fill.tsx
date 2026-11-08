import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatLetterSpacing2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M226-80 80-226l146-145 42 42-73 73h569l-72-73 43-42 145 145L734-80l-42-42 74-74H195l73 74zm61-360 164-440h59l164 440h-55l-43-122H385l-43 122zm114-166h160l-78-222h-4z" /></svg>;
export default MaterialFormatLetterSpacing2Fill;