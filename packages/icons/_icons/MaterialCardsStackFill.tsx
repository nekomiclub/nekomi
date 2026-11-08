import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCardsStackFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M232-118q-24 3-43.5-12T165-170l-58-420q-3-24 12-43.5t39-22.5v301q0 50 35 85t85 35h490q0 23-14.5 39T716-177zm48-178q-24 0-42-18t-18-42v-424q0-24 18-42t42-18h540q24 0 42 18t18 42v424q0 24-18 42t-42 18zm110-312h320v-60H390zm0 140h199v-60H390z" /></svg>;
export default MaterialCardsStackFill;