import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPageHeader: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-780v-60h720v60zm660 100q24 0 42 18t18 42v440q0 24-18 42t-42 18H180q-24 0-42-18t-18-42v-440q0-24 18-42t42-18zm0 60H180v440h600zm-600 0v440z" /></svg>;
export default MaterialPageHeader;