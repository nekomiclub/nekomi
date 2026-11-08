import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMan3: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M420-70v-280h-80v-253q0-24.75 17.63-42.38Q375.25-663 400-663h160q24.75 0 42.38 17.62Q620-627.75 620-603v253h-80v280zm60-644-83-83 83-83 83 83z" /></svg>;
export default MaterialMan3;