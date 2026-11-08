import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEarbudLeftFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M303-80q-24 0-42-18t-18-42v-351h-63q-24 0-42-18t-18-42v-189q0-24 18-42t42-18h294v660q0 24-18 42t-42 18zm271-329v-471h30q98 0 167 68.5T840-645t-69 167-167 69z" /></svg>;
export default MaterialEarbudLeftFill;