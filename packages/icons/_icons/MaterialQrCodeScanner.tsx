import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialQrCodeScanner: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-707v-173h173v60H140v113zm0 627v-173h60v113h113v60zm627 0v-60h113v-113h60v173zm113-627v-113H707v-60h173v173zM708-251h63v63h-63zm0-126h63v63h-63zm-63 63h63v63h-63zm-63 63h63v63h-63zm-63-63h63v63h-63zm126-126h63v63h-63zm-63 63h63v63h-63zm-63-63h63v63h-63zm252-332v252H519v-252zM440-440v252H188v-252zm0-332v252H188v-252zm-50 534v-152H238v152zm0-332v-152H238v152zm331 0v-152H569v152z" /></svg>;
export default MaterialQrCodeScanner;