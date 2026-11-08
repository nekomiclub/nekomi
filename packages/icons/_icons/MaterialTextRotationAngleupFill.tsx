import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextRotationAngleupFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m375-92-42-42 406-406h-78v-60h180v180h-60v-78zm-46-239L135-760l40-40 429 195-40 39-114-54-136 134 54 115zm-37-199 114-112-210-99-3 2z" /></svg>;
export default MaterialTextRotationAngleupFill;