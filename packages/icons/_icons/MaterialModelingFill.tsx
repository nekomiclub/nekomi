import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialModelingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M718-145 569-295l149-150 42 43-76 77 196 1v60l-196-1 76 77zm-578-15q-24 0-42-18t-18-42v-147q0-24 18-42t42-18h269q24 0 42 18t18 42v147q0 24-18 42t-42 18zm102-357-42-42 76-78H80v-60h196l-76-77 42-42 149 149zm309-16q-24 0-42-18t-18-42v-147q0-24 18-42t42-18h269q24 0 42 18t18 42v147q0 24-18 42t-42 18z" /></svg>;
export default MaterialModelingFill;