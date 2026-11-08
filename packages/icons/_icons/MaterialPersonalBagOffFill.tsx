import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonalBagOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-880q44 0 74.5 33t30.5 77v19q76 30 125.5 101.5T760-490v200L375-675v-95q0-44 30.5-77t74.5-33m-32.5 75Q435-790 435-770v2q6-1 21.5-1.5t23.5-.5q9 0 24.5.5T525-768v-2q0-20-12.5-35T480-820t-32.5 15M820-59 674-205h86v65q0 24-18 42t-42 18H260q-24 0-42-18t-18-42v-350q0-38 10.5-76.5T242-637L75-804l43-43 745 745zM400-480H290v60h170z" /></svg>;
export default MaterialPersonalBagOffFill;