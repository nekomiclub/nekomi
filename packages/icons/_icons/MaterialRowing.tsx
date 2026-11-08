import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRowing: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M734 0 622-112v-62L301-495q-6 2-12.5 3t-11.5 1v-53q49-2 111-29t93-61l58-63q12-13 27.5-21t32.5-8q32 0 55 23t23 55v248q0 30-13.5 61T630-297L516-411v-174q-30 26-67 46t-70 32l288 288h62l112 112zM205-144l-45-45 206-204 105 105H350zm347.5-651.5Q531-817 531-847t21.5-51.5T604-920t51.5 21.5T677-847t-21.5 51.5T604-774t-51.5-21.5" /></svg>;
export default MaterialRowing;