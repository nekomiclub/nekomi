import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocalMall: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-80q-24.75 0-42.37-17.63Q120-115.25 120-140v-530q0-24.75 17.63-42.38Q155.25-730 180-730h110q0-78 53.5-134T475-920q80.92 0 137.96 55T670-730h110q24.75 0 42.38 17.62Q840-694.75 840-670v530q0 24.75-17.62 42.37Q804.75-80 780-80zm0-60h600v-530H180zm437-348q58-58 58-137h-60q0 55-40 95t-95 40-95-40-40-95h-60q0 79 58 137t137 58 137-58M350-730h260q0-55-37.5-92.5T480-860t-92.5 37.5T350-730M180-140v-530z" /></svg>;
export default MaterialLocalMall;