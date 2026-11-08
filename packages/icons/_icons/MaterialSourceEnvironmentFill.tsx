import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSourceEnvironmentFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-670l195-130 195 130v115h410v555zm60-60h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm165 0h105v-105H305zm0 495h515v-435H305zm245-270v-60h165v60zm0 165v-60h165v60zM410-450v-60h60v60zm0 165v-60h60v60z" /></svg>;
export default MaterialSourceEnvironmentFill;