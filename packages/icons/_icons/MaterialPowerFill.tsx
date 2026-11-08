import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPowerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M382-120v-118L240-394v-215q0-25 17.5-42.5T300-669h72l-30 30v-201h60v171h156v-171h60v201l-30-30h72q25 0 42.5 17.5T720-609v215L578-238v118z" /></svg>;
export default MaterialPowerFill;