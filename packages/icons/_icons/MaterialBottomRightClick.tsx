import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBottomRightClick: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h660v-660h60v660q0 24.75-17.62 42.37Q804.75-120 780-120zm430.5-190.59q-20.5-20.59-20.5-49.5t20.59-49.41 49.5-20.5 49.41 20.59 20.5 49.5-20.59 49.41-49.5 20.5-49.41-20.59M220-480v-60h158L119-799l42-42 259 259v-158h60v260z" /></svg>;
export default MaterialBottomRightClick;