import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialYourTripsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M310-200h340v-60H310zM260-80q-24 0-42-18t-18-42v-350q0-88 49-158.5T375-751v-19q0-44 30.5-77t74.5-33 74.5 33 30.5 77v19q77 32 126 102.5T760-490v350q0 24-18 42t-42 18zm175-688q5-1 20.5-1.5t24.5-.5 24.5.5T525-768v-2q0-20-12.5-35T480-820t-32.5 15-12.5 35zm-29 378 74-56 74 56-28-91 74-53h-91l-29-96-29 96h-91l74 53z" /></svg>;
export default MaterialYourTripsFill;