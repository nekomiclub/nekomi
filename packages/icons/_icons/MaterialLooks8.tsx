import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLooks8: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600zm245 513h110q24.75 0 42.38-17.63Q595-302.25 595-327v-95q0-23-13.5-41T546-481q21 0 35-15.75T595-535v-99q0-24.75-17.62-42.38Q559.75-694 535-694H425q-24.75 0-42.37 17.62Q365-658.75 365-634v99q0 22.5 14.58 38.25Q394.17-481 415-481q-22 0-36 18t-14 41v95q0 24.75 17.63 42.37Q400.25-267 425-267m0-367h110v123H425zm0 307v-124h110v124z" /></svg>;
export default MaterialLooks8;