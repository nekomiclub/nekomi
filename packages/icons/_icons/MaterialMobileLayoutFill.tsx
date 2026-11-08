import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileLayoutFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-120q-24 0-42-18t-18-42v-108q0-24 18-42t42-18h272q24 0 42 18t18 42v108q0 24-18 42t-42 18zm492 0q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h268q24 0 42 18t18 42v600q0 24-18 42t-42 18zm134-120q13 0 21.5-9t8.5-21q0-13-8.5-21.5T726-300t-21.5 8.5T696-270q0 12 8.5 21t21.5 9M100-448q-24 0-42-18t-18-42v-272q0-24 18-42t42-18h272q24 0 42 18t18 42v272q0 24-18 42t-42 18zm182-212q13 0 21.5-8.5T312-690q0-12-8.5-21t-21.5-9q-12 0-21 9t-9 21q0 13 9 21.5t21 8.5M93-506h181l-91-121z" /></svg>;
export default MaterialMobileLayoutFill;