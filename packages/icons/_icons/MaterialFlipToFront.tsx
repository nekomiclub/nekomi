import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlipToFront: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M345-285q-24 0-42-18t-18-42v-435q0-24 18-42t42-18h435q24 0 42 18t18 42v435q0 24-18 42t-42 18zm0-60h435v-435H345zM180-180v60q-24.75 0-42.37-17.63Q120-155.25 120-180zm-60-105v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm165 495v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60z" /></svg>;
export default MaterialFlipToFront;