import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOven: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M674-720q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m-173 0q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m-173 0q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m-148 99v441h600v-441zm208 150h185v-60H388zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm300-501" /></svg>;
export default MaterialOven;