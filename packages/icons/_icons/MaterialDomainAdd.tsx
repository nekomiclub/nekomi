import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDomainAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-720h390v165h410v340h-60v-280H470v105h80v60h-80v105h80v60h-80v105h195v60zm60-60h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm165 495h105v-105H305zm0-165h105v-105H305zm0-165h105v-105H305zm0-165h105v-105H305zM813-40v-87h-88v-60h88v-88h60v88h87v60h-87v87zM655-450v-60h60v60zm0 165v-60h60v60z" /></svg>;
export default MaterialDomainAdd;