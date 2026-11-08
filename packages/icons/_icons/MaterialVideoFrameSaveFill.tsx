import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideoFrameSaveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M820-570v-170H650v-60h170q24 0 42 18t18 42v170zm-740 0v-170q0-24 18-42t42-18h170v60H140v170zm60 410q-24 0-42-18t-18-42v-170h60v170h170v60zm243-150v-340l267 170zM612 0v-60h320V0zm157-120L613-277l42-42 85 84v-199h60v199l85-84 42 42z" /></svg>;
export default MaterialVideoFrameSaveFill;