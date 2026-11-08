import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLipsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M473-200q-146 0-263-89T43-515q107 38 215.5 68T481-417q111 0 217-28t210-67q-51 141-164.5 226.5T489-200zm9-264q-107 0-209.5-26T73-560l188-179q13-12 29-18t33-6q13 0 26 3t24 11l108 71 108-70q11-8 23.5-11.5T638-763q17 0 32 6t28 17l197 176q-99 44-201.5 72T482-464" /></svg>;
export default MaterialLipsFill;