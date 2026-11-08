import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLaptopWindows: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M0-160v-60h141v-42q-24 0-42-18t-18-42v-458q0-24 18-42t42-18h678q24 0 42 18t18 42v458q0 24-18 42t-42 18v42h141v60zm141-162h678v-458H141zm0 0v-458z" /></svg>;
export default MaterialLaptopWindows;