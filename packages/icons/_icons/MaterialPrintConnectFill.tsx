import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPrintConnectFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M242-120v-176H80v-246q0-45 30.5-75.5T186-648h588q45 0 75.5 30.5T880-542v87q-26-17-55-25.5t-61-8.5q-61 0-112.5 31.5T572-372H302v192h267q8 17 18.5 32t24.5 28zm0-558v-162h476v162zm476 511-100-99 43-42 57 56 141-141 43 42z" /></svg>;
export default MaterialPrintConnectFill;