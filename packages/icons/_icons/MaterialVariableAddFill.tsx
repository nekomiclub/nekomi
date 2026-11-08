import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVariableAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-280v-400h720v162q-8-1-14.97-1.5-6.96-.5-15.03-.5-87.5 0-148.75 61.25T600-310q0 8.07.5 15.03Q601-288 602-280zm660 120v-120H660v-60h120v-120h60v120h120v60H840v120z" /></svg>;
export default MaterialVariableAddFill;