import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShieldCardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M520-80q-24 0-42-18t-18-42v-220q0-24 18-42t42-18h340q24 0 42 18t18 42v220q0 24-18 42t-42 18zm0-60h340v-100H520zm0-160h340v-60H520zM160-523v-238l320-120 320 120v281H520q-48 0-84 36t-36 84v220q0 8 1 15t3 15q-109-56-176.5-169T160-523" /></svg>;
export default MaterialShieldCardFill;