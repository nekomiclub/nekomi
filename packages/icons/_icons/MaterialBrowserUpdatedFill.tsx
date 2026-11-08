import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrowserUpdatedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-120v-73l47-47H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h397v60H140v480h680v-139h60v139q0 24-18 42t-42 18H652l48 47v73zm367-226L434-539l42-42 121 120v-379h60v379l121-120 42 42z" /></svg>;
export default MaterialBrowserUpdatedFill;