import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTurnSharpRight: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-120v-250q0-24.75 17.63-42.38Q285.25-430 310-430h340v-296l-90 90-42-42 162-162 162 162-42 42-90-90v296q0 24.75-17.62 42.37Q674.75-370 650-370H310v250z" /></svg>;
export default MaterialTurnSharpRight;