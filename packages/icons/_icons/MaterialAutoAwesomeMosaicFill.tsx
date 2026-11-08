import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAutoAwesomeMosaicFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M451-120H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h271zm60-391v-329h269q24 0 42 18t18 42v269zm0 391v-331h329v271q0 24-18 42t-42 18z" /></svg>;
export default MaterialAutoAwesomeMosaicFill;