import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPowerOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M382-120v-118L240-394v-215q0-25 17-42.5t41-17.5v84L67-816l42-42 750 750-42 42-207-207-32 35v118zm310-240L342-710v-130h60v171h156v-171h60v201l-30-30h72q25 0 42.5 17.5T720-609v217z" /></svg>;
export default MaterialPowerOffFill;