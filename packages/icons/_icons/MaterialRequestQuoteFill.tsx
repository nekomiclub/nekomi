import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRequestQuoteFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18zm230-121h60v-40h60q13 0 21.5-8.5T600-271v-130q0-13-8.5-21.5T570-431H420v-70h180v-60h-90v-40h-60v40h-60q-13 0-21.5 8.5T360-531v130q0 13 8.5 21.5T390-371h150v70H360v60h90zm106-460h159L556-820z" /></svg>;
export default MaterialRequestQuoteFill;