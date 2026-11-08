import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialResize: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M780-615v-165H615v-60h225v225zM120-120v-225h60v165h165v60zm0-330v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm165 0v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm165 0v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60z" /></svg>;
export default MaterialResize;