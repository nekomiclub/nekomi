import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBorderStyle: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M285-120v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zM120-120v-720h720v60H180v660z" /></svg>;
export default MaterialBorderStyle;