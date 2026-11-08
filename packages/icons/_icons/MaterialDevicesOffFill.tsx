import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDevicesOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M838-37 715-160H606q-18 0-31.5-13.5T561-205v-109l-60-60v94H180q-24 0-42-18t-18-42v-400q0-4 .5-7t1.5-6l-84-83.62L80-879 881-79zM501-544 245-800h535q24 0 42 18t18 42H606.5q-44.8 0-75.13 31T501-634zm368 368L561-484v-151q0-18 13.5-31.5T606-680h229q18 0 31.5 13.5T880-635v430q0 8-3.2 15.5T869-176M721-520q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9M80-160v-60h421v60z" /></svg>;
export default MaterialDevicesOffFill;