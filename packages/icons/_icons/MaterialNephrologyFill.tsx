import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNephrologyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M370-120v-172q-11 6-24 9t-26 3q-99 0-169.5-66.5T80-510v-100q0-97 70.5-163.5T320-840q46 0 78 32t32 78-32 78-78 32v120q46 0 78 32t32 78v270zm160 0v-270q0-46 32-78t78-32v-120q-46 0-78-32t-32-78 32-78 78-32q99 0 169.5 66.5T880-610v100q0 97-70.5 163.5T640-280q-13 0-26-3t-24-9v172z" /></svg>;
export default MaterialNephrologyFill;