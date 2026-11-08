import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonalBag: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-80q-24 0-42-18t-18-42v-350q0-88 49-158.5T375-751v-19q0-44 30.68-77 30.67-33 74.5-33 43.82 0 74.32 33t30.5 77v19q77 32 126 102.5T760-490v350q0 24-18 42t-42 18zm0-60h440v-350.17q0-90.83-64.29-155.33T480.21-710 324.5-645.65 260-490zm401-199q9-9 9-21v-120H290v60h320v60q0 12 9 21t21 9 21-9M435-768q5-1 20.5-1.5t24.5-.5 24.5.5T525-768v-2q0-20-12.5-35T480-820t-32.5 15-12.5 35zM260-140h440z" /></svg>;
export default MaterialPersonalBag;