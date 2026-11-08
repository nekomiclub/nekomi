import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShieldWithHeart: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-338q89-81 114.5-113.5T620-517q0-32-22.5-54.5T543-594q-19 0-35.5 7.5T480-566q-11-13-27.5-20.5T417-594q-32 0-54.5 22.5T340-517q0 16 4.5 30.5T364-453t42.5 46 73.5 69m0 257q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81m0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143m0-337" /></svg>;
export default MaterialShieldWithHeart;