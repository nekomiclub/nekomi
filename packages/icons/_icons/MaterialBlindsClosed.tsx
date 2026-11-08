import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBlindsClosed: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M604.9-60q-24.9 0-42.4-17.57T545-120H80v-60h80v-660h640v660h80v60H665q0 24.86-17.6 42.43T604.9-60M220-675h355v-105H220zm415 0h105v-105H635zM220-510h355v-105H220zm415 0h105v-105H635zM220-345h355v-105H220zm415 0h105v-105H635zM220-180h355v-105H220zm415 0h105v-105H635z" /></svg>;
export default MaterialBlindsClosed;