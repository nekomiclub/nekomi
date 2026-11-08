import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEggFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M281.5-201.5Q200-283 200-400q0-77 25.5-155t66-141.5T382-800t98-40q49 0 98.5 40t90 103.5 66 141.5T760-400q0 117-81.5 198.5T480-120t-198.5-81.5M505-241q8.5 0 14.25-6t5.75-14-5.75-14-14.25-6q-58.33 0-99.17-40.83Q365-362.67 365-421q0-8.5-6-14.25T345-441t-14 5.75-6 14.25q0 74.7 52.65 127.35T505-241" /></svg>;
export default MaterialEggFill;