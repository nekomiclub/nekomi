import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVariableAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M600-280H120v-400h720v160h-60v-100H180v280h420zm-420-60v-280zm600 180v-120H660v-60h120v-120h60v120h120v60H840v120z" /></svg>;
export default MaterialVariableAdd;