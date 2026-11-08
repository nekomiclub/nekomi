import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material30fpsSelect: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M172-400v-60h199v-110H171v-60h200v-110H172v-60h199q24 0 42 18t18 42v86q0 23.4-16.5 38.7T378-600q20 0 36.5 17.5T431-542v82q0 24-18 42t-42 18zm557 0H591q-24 0-42-18t-18-42v-280q0-24 18-42t42-18h138q24 0 42 18t18 42v280q0 24-18 42t-42 18m0-60v-280H591v280zM120-80v-188h60v188zm120 0v-188h60v188zm120 0v-188h60v188zm120 0v-188h360v188z" /></svg>;
export default Material30fpsSelect;