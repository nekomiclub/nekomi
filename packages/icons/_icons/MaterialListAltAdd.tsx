import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialListAltAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M700-40v-120H580v-60h120v-120h60v120h120v60H760v120zM180-180v-600zv-9zm0 60q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v388q-13.66-7.92-28.83-12.96T780-414v-366H180v600h320q1 16 3.08 30.92 2.07 14.91 6.92 29.08zm141-175q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m0-164q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m0-164q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m111 173h244v-60H432zm0-164h244v-60H432zm0 328h89q8-17 18.5-31.5T562-346H432z" /></svg>;
export default MaterialListAltAdd;