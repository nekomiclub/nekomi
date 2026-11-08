import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHighDensityFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-285v-555h555v555zm0 165v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60z" /></svg>;
export default MaterialHighDensityFill;