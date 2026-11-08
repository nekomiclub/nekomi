import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRequestQuote: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-201h60v-40h60q12.75 0 21.38-8.63Q600-258.25 600-271v-130q0-12.75-8.62-21.38Q582.75-431 570-431H420v-70h180v-60h-90v-40h-60v40h-60q-12.75 0-21.37 8.62Q360-543.75 360-531v130q0 12.75 8.63 21.37Q377.25-371 390-371h150v70H360v60h90zM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18zm311-581v-159H220v680h520v-521zM220-820v159zv680z" /></svg>;
export default MaterialRequestQuote;