import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShuffleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M576-160v-60h120L522-393l42-43 176 174v-121h60v223zm-374 0-42-43 538-537H576v-60h224v223h-60v-120zm193-363L160-757l43-43 235 234z" /></svg>;
export default MaterialShuffleFill;