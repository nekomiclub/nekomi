import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSevereCold: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M810-570q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5q13 0 21.5 8.5T840-600q0 12-8.5 21t-21.5 9M400-80v-158L286-124l-42-42 156-156v-78h-78L166-244l-42-42 114-114H80v-60h158L124-574l42-42 156 156h78v-78L244-694l42-42 114 114v-158h60v158l114-114 42 42-156 156v78h320v60H622l114 114-42 42-156-156h-78v78l156 156-42 42-114-114v158zm380-610v-190h60v190z" /></svg>;
export default MaterialSevereCold;