import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHttpFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-360v-240h48v85h115v-85h48v240h-48v-107H88v107zm313 0v-192h-80v-48h208v48h-80v192zm230 0v-192h-80v-48h208v48h-80v192zm150 0v-240h138q23 0 36 13t13 36v58q0 23-13 35.5T871-445h-90v85zm48-133h91v-59h-91z" /></svg>;
export default MaterialHttpFill;