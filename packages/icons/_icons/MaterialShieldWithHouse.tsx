import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShieldWithHouse: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81m0-511L236-402q22 72 67.5 130.5T410-176v-174h140v174q61-37 106.5-95.5T724-402zm0-225-260 98v196q0 13 1 28t3 28l256-200 256 200q2-13 3-28t1-28v-196z" /></svg>;
export default MaterialShieldWithHouse;