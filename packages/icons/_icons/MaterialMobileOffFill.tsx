import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M850-28 28-864l42-42L893-70zM500-729q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9M260-40q-25 0-42.5-17.5T200-100v-673l560 568v105q0 25-17.5 42.5T700-40zm500-256L200-860q0-24 17.5-42t42.5-18h440q25 0 42.5 17.5T760-860v150q18 3 30 17t12 32v74q0 19-12 33t-30 17z" /></svg>;
export default MaterialMobileOffFill;