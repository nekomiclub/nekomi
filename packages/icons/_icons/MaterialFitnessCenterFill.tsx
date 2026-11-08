import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFitnessCenterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m550-84-42-42 142-142-382-382-142 142-42-42 56-58-56-56 85-85-42-42 42-42 43 41 84-84 56 56 58-56 42 42-142 142 382 382 142-142 42 42-56 58 56 56-86 86 42 42-42 42-42-42-84 84-56-56z" /></svg>;
export default MaterialFitnessCenterFill;