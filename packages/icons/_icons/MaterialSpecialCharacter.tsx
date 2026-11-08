import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpecialCharacter: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-100h245q-102-37-163.5-124.5T140-540q0-142 99-241t241-99 241 99 99 241q0 108-61.5 195.5T595-220h245v100H520v-183q88-14 144-81.5T720-540q0-100-70-170t-170-70-170 70-70 170q0 88 56 155.5T440-303v183z" /></svg>;
export default MaterialSpecialCharacter;