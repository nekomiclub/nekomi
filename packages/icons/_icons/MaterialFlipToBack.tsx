import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlipToBack: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-495h60v495h495v60zm165-225v60q-24.75 0-42.37-17.63Q285-320.25 285-345zm-60-105v-60h60v60zm0-165v-60h60v60zm60-165h-60q0-24.75 17.63-42.38Q320.25-840 345-840zm105 495v-60h60v60zm0-495v-60h60v60zm165 0v-60h60v60zm0 495v-60h60v60zm165-495v-60q24.75 0 42.38 17.62Q840-804.75 840-780zm0 435h60q0 24.75-17.62 42.37Q804.75-285 780-285zm0-105v-60h60v60zm0-165v-60h60v60z" /></svg>;
export default MaterialFlipToBack;