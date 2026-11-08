import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCurrencyRupeeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M564-120 290-404v-66h130q57 0 100-37t50-103H240v-60h325q-13-48-53.5-79T420-780H240v-60h480v60H566q23 20 39 51t23 59h92v60h-90q-8 91-67.5 145.5T420-410h-52l279 290z" /></svg>;
export default MaterialCurrencyRupeeFill;