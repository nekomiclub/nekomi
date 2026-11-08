import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShieldToggleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M400-520h160q33 0 56.5-23.5T640-600t-23.5-56.5T560-680H400q-33 0-56.5 23.5T320-600t23.5 56.5T400-520m131.5-51.5Q520-583 520-600t11.5-28.5T560-640t28.5 11.5T600-600t-11.5 28.5T560-560t-28.5-11.5M400-320h160q33 0 56.5-23.5T640-400t-23.5-56.5T560-480H400q-33 0-56.5 23.5T320-400t23.5 56.5T400-320m-28.5-51.5Q360-383 360-400t11.5-28.5T400-440t28.5 11.5T440-400t-11.5 28.5T400-360t-28.5-11.5M480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81" /></svg>;
export default MaterialShieldToggleFill;