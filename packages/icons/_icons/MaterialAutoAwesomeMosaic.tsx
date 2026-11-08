import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAutoAwesomeMosaic: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M451-120H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h271zm-60-60v-600H180v600zm120-331v-329h269q24 0 42 18t18 42v269zm60-60h209v-209H571zm-60 451v-331h329v271q0 24-18 42t-42 18zm60-60h209v-211H571zm0-211" /></svg>;
export default MaterialAutoAwesomeMosaic;