import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWebStoriesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M700-140v-680q28 0 44 14.5t16 45.5v560q0 31-16 45.5T700-140M140-80q-25 0-42.5-17.5T80-140v-680q0-25 17.5-42.5T140-880h400q25 0 42.5 17.5T600-820v680q0 25-17.5 42.5T540-80zm720-121v-557q20 0 30 8.5t10 31.5v477q0 23-10 31.5t-30 8.5" /></svg>;
export default MaterialWebStoriesFill;