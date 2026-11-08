import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDevicesOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m305-740-60-60h535q24 0 42 18t18 42zm416 220q12 0 21-9t9-21-9-21-21.48-9Q709-580 700-571t-9 21.48q0 11.52 9 20.52t21 9m148 344-49-49v-395H621v196l-60-60v-151q0-18 13.5-31.5T606-680h229q18 0 31.5 13.5T880-635v430q0 8.12-3 15.56T869-176M838-37 715-160H606q-18 0-31.5-13.5T561-205v-109L180-695v355h321v60H180q-24 0-42-18t-18-42v-400q0-4 .5-7t1.5-6l-84-84 42-42L881-79zM80-160v-60h421v60z" /></svg>;
export default MaterialDevicesOff;