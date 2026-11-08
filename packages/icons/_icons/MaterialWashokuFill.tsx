import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWashokuFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m281-120-62-187q-37-20-62.5-52.5T120-433L90-545h780l-30 112q-11 41-36 73.5T742-307l-63 187zm520-525H160q0-47 30-80t84-33h40q18-38 51.5-60t74.5-22q49 0 85.5 32t47.5 85q23-27 49.5-41t56.5-14q51 0 86.5 35.5T801-656z" /></svg>;
export default MaterialWashokuFill;