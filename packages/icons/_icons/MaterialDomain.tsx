import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDomain: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-720h390v165h410v555zm60-60h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm165 495h105v-105H305zm0-165h105v-105H305zm0-165h105v-105H305zm0-165h105v-105H305zm165 495h350v-435H470v105h80v60h-80v105h80v60h-80zm185-270v-60h60v60zm0 165v-60h60v60z" /></svg>;
export default MaterialDomain;