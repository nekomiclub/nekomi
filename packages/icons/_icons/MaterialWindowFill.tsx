import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWindowFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M510-450h330v270q0 24.75-17.62 42.37Q804.75-120 780-120H510zm0-60v-330h270q24.75 0 42.38 17.62Q840-804.75 840-780v270zm-60 0H120v-270q0-24.75 17.63-42.38Q155.25-840 180-840h270zm0 60v330H180q-24.75 0-42.37-17.63Q120-155.25 120-180v-270z" /></svg>;
export default MaterialWindowFill;