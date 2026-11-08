import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShieldWithHeartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-338q89-81 114.5-113.5t25.5-65.45q0-32.05-22.75-54.55T543-594q-19 0-35.5 7.5T480-566q-10.56-13.13-27.27-20.56-16.71-7.44-36.06-7.44-31.67 0-54.17 22.75T340-517q0 16 4.43 30.29 4.43 14.3 19.5 33.5Q379-434 406.43-406.95 433.85-379.89 480-338m0 257q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81" /></svg>;
export default MaterialShieldWithHeartFill;