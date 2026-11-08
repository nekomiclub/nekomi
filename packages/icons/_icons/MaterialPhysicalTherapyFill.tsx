import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhysicalTherapyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M650-300H375q-26 0-42.5 16T312-247t5.5 42 35.5 31L609-73q8 3 15 2t13-5 9.5-10.5T650-101zM513-833q47 47 47 113t-47 113-113 47-113-47-47-113 47-113 113-47 113 47m256 313q29 0 50 21t21 51q0 23-13.5 41T791-383l-81 23H375q-52 0-88.5 36.5T250-235q0 20 7 39t20 36H120v-160q0-83 58.5-141.5T320-520z" /></svg>;
export default MaterialPhysicalTherapyFill;