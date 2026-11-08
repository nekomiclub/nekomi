import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextRotationAngledown: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M420-120v-60h78L92-586l42-42 406 406v-78h60v180zm185-237-39-40 54-114-134-136-115 54-40-39 429-194 40 40zm-75-312 112 114 99-210-2-3z" /></svg>;
export default MaterialTextRotationAngledown;