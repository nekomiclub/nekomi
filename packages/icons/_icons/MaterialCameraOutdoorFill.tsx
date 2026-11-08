import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCameraOutdoorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-480l320-240 320 240v120H510q-27 0-46 19t-19 46v170q0 27 19 46t46 19h290v60zm350-90q-14 0-24.5-10.5T475-245v-170q0-14 10.5-24.5T510-450h175q14 0 24.5 10.5T720-415v55l80-46v152l-80-46v55q0 14-10.5 24.5T685-210z" /></svg>;
export default MaterialCameraOutdoorFill;