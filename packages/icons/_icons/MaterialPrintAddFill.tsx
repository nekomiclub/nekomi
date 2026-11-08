import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPrintAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M242-120v-176H80v-246q0-45.05 30.5-75.53Q141-648 186-648h588q45.05 0 75.53 30.47Q880-587.05 880-542v87q-26-17-55-25.5t-61-8.5q-61 0-112.5 31.5T572-372H302v192h267q8 17 18.5 32t24.5 28zm0-558v-162h476v162zm490 555v-120H612v-60h120v-120h60v120h120v60H792v120z" /></svg>;
export default MaterialPrintAddFill;