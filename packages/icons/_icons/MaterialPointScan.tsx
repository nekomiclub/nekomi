import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPointScan: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M430.5-430.59q-20.5-20.59-20.5-49.5t20.59-49.41 49.5-20.5 49.41 20.59 20.5 49.5-20.59 49.41-49.5 20.5-49.41-20.59M450-640v-200h60v200zm0 520v-200h60v200zm190-330v-60h200v60zm-520 0v-60h200v60z" /></svg>;
export default MaterialPointScan;