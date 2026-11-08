import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDomainDisabledFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m880-151-60-60v-404H416l-6-5v-160H252l-60-60h278v165h410zM834-28l-92-92H80v-661l-52-52 42-43L876-70zM140-180h105v-105H140zm0-165h105v-105H140zm0-165h105v-105H140zm165 330h105v-105H305zm0-165h105v-105H305zm165 165h211L576-285H470zm245-270h-60v-60h60z" /></svg>;
export default MaterialDomainDisabledFill;