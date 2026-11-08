import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoorBack: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h80v-600q0-24 18-42t42-18h440q24 0 42 18t18 42v600h80v60zm140-60h440v-600H260zm133-269q14.45 0 24.23-9.77Q427-468.55 427-483t-9.77-24.23Q407.45-517 393-517t-24.23 9.77Q359-497.45 359-483t9.77 24.23Q378.55-449 393-449M260-780v600z" /></svg>;
export default MaterialDoorBack;