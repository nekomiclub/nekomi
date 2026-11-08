import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialListAltCheck: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-180v-600 530-88zm0 60q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v390h-60v-390H180v600h340v60zm522 40L572-210l42-43 88 88 175-175 43 42zM321-459q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m0-164q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m111 173h244v-60H432zm0-164h244v-60H432z" /></svg>;
export default MaterialListAltCheck;