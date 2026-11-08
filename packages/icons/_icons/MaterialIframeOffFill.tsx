import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialIframeOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M833-41 714-160H140q-25 0-42.5-17.5T80-220v-520q0-25 17.5-42.5T140-800h20v86L26-848l43-43L876-84zM140-220h514L218-656h-78zm725 39-45-45v-430H390L246-800h574q25 0 42.5 17.5T880-740v520q0 11-4 21t-11 18M720-326 486-560h234z" /></svg>;
export default MaterialIframeOffFill;