import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialListAltAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M700-40v-120H580v-60h120v-120h60v120h120v60H760v120zM321-295q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m0-164q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m0-164q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m111 173h244v-60H432zm0-164h244v-60H432zM180-120q-25 0-42.5-17.5T120-180v-600q0-25 17.5-42.5T180-840h600q25 0 42.5 17.5T840-780v388q-26-14-53.5-20.5T730-419q-50 0-92 19.5T564-346H432v60h92q-11 24-17.5 50.5T500-180q1 15 3 30.5t7 29.5z" /></svg>;
export default MaterialListAltAddFill;