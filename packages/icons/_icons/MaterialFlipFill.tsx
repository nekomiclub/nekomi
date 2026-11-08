import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlipFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M349-120H180q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h169v60H180v600h169zm103 80v-880h60v880zm163-80v-60h60v60zm0-660v-60h60v60zm165 660v-60h60q0 25-17.62 42.5Q804.75-120 780-120m0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm0-165v-60q24.75 0 42.38 17.62Q840-804.75 840-780z" /></svg>;
export default MaterialFlipFill;