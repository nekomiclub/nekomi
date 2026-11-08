import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoorFront: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h80v-600q0-24 18-42t42-18h440q24 0 42 18t18 42v600h80v60zm580-60v-600H260v600zM567-449q14.45 0 24.22-9.77Q601-468.55 601-483t-9.78-24.23Q581.45-517 567-517t-24.22 9.77Q533-497.45 533-483t9.78 24.23Q552.55-449 567-449M260-780v600z" /></svg>;
export default MaterialDoorFront;