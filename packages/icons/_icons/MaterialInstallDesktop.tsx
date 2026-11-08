import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInstallDesktop: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M330-120v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h360v60H140v520h680v-140h60v140q0 24-18 42t-42 18H630v80zm350-294L494-600l42-42 114 114v-312h60v312l114-114 42 42z" /></svg>;
export default MaterialInstallDesktop;