import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material24fpsSelect: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-80v-188h60v188zm120 0v-188h60v188zm120 0v-188h60v188zm120 0v-188h360v188zm215-320v-130H531v-270h60v210h104v-210h60v210h85v60h-85v130zm-494 0v-170q0-24.75 17.63-42.38Q236.25-630 261-630h120v-110H201v-60h180q24.75 0 42.38 17.62Q441-764.75 441-740v110q0 24.75-17.62 42.37Q405.75-570 381-570H261v110h180v60z" /></svg>;
export default Material24fpsSelect;