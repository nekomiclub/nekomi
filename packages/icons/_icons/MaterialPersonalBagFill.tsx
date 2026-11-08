import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonalBagFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-80q-24 0-42-18t-18-42v-350q0-88 49-158.5T375-751v-19q0-44 30.5-77t74.5-33 74.5 33 30.5 77v19q77 32 126 102.5T760-490v350q0 24-18 42t-42 18zm401-259q9-9 9-21v-120H290v60h320v60q0 12 9 21t21 9 21-9M435-768q5-1 20.5-1.5t24.5-.5 24.5.5T525-768v-2q0-20-12.5-35T480-820t-32.5 15-12.5 35z" /></svg>;
export default MaterialPersonalBagFill;