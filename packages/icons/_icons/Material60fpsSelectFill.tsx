import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material60fpsSelectFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M371-400H228q-24 0-42-18t-18-42v-280q0-24 18-42t42-18h203v60H228v110h143q24 0 42 18t18 42v110q0 24-18 42t-42 18M228-570v110h143v-110zm506 170H591q-24 0-42-18t-18-42v-280q0-24 18-42t42-18h143q24 0 42 18t18 42v280q0 24-18 42t-42 18m0-60v-280H591v280zM120-80v-188h60v188zm120 0v-188h60v188zm120 0v-188h60v188zm120 0v-188h360v188z" /></svg>;
export default Material60fpsSelectFill;