import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPinInvokeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h460v60H140v520h680v-300h60v300q0 24-18 42t-42 18zm255-152-42-43 145-145H394v-60h206v206h-60v-103zm375-268q-45 0-77.5-32.08Q660-644.17 660-690q0-45 32.5-77.5t78-32.5 77.5 32.5 32 78-32.08 77.5q-32.09 32-77.92 32" /></svg>;
export default MaterialPinInvokeFill;