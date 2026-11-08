import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBreakfastDiningFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M230-120q-26 0-43-17t-17-43v-367q-39-22-64.5-56.5T80-692q0-63 42.5-105.5T228-840h504q63 0 105.5 42.5T880-692q0 54-25.5 88.5T791-547v367q0 26-17 43t-43 17zm229-129q10 10 21.5 10t21.5-10l170-170q10-10 10-21.5T672-462L502-632q-8-8-21.5-8t-21.5 8L289-462q-10 10-10 21.5t10 21.5zm21-61L352-438l128-128 128 128z" /></svg>;
export default MaterialBreakfastDiningFill;