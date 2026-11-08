import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialElectricalServices: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M715-360v-60h95q13 0 21.5 8.5T840-390q0 12-8.5 21t-21.5 9zm0 160v-60h95q13 0 21.5 8.5T840-230q0 12-8.5 21t-21.5 9zm-155 40q-29 0-49.5-23.5T490-240h-95v-140h95q0-33 20.5-56.5T560-460h125v300zM275-280q-67 0-111-43.5T120-435t44-111.5T275-590h65q33 0 54-21t21-54-21-54-54-21H190q-12 0-21-9t-9-21q0-13 9-21.5t21-8.5h150q58 0 96.5 38.5T475-665t-38.5 96.5T340-530h-65q-42 0-68.5 26T180-435t26.5 69 68.5 26h90v60z" /></svg>;
export default MaterialElectricalServices;