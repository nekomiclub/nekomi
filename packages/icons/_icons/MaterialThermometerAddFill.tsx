import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialThermometerAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M690-520v-130H560v-60h130v-130h60v130h130v60H750v130zM320-120q-75.53 0-128.76-53.24Q138-226.47 138-302q0-49.1 24-91.55T228-462v-286q0-38.33 26.76-65.17 26.77-26.83 65-26.83Q358-840 385-813.17q27 26.84 27 65.17v286q42 26 66 68.45T502-302q0 75.53-53.23 128.76Q395.53-120 320-120m-32-429h64v-199q0-13.6-9.2-22.8T320-780t-22.8 9.2T288-748z" /></svg>;
export default MaterialThermometerAddFill;