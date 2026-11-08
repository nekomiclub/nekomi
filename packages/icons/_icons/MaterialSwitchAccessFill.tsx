import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwitchAccessFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M285-285v-390h390v390zm-165 0v-60h60v60zm0-330v-60h60v60zm165 495v-60h60v60zm0-660v-60h60v60zm330 660v-60h60v60zm0-660v-60h60v60zm165 495v-60h60v60zm0-330v-60h60v60z" /></svg>;
export default MaterialSwitchAccessFill;