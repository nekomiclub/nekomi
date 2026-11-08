import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyVisualizerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h120v60zm0-165v-60h322v60zm0-165v-60h720v60zm0-165v-60h322v60zm0-165v-60h120v60zm202 660v-60h120v60zm-2-660v-60h120v60zm203 660v-60h115v60zm-3-165v-60h320v60zm0-330v-60h320v60zm0-165v-60h120v60zm200 660v-60h120v60zm0-660v-60h120v60z" /></svg>;
export default MaterialKeyVisualizerFill;