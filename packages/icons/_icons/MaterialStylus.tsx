import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStylus: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198zm191-40L160-358l473-473q17-17 42-17t42 17l114 114q17 17 17 42t-17 42zm317-628L233-346l113 113 442-442z" /></svg>;
export default MaterialStylus;