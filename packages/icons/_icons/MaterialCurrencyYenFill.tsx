import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCurrencyYenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-120v-150H240v-60h210v-100H240v-60h181L200-840h71l209 331 209-331h71L539-490h181v60H510v100h210v60H510v150z" /></svg>;
export default MaterialCurrencyYenFill;