import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForwardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m644-288-43-43 193-193-193-193 43-43 236 236zM81-200v-156q0-85 56.5-141.5T279-554h305L421-717l43-43 236 236-236 236-43-43 163-163H279q-60 0-99 39t-39 99v156z" /></svg>;
export default MaterialForwardFill;