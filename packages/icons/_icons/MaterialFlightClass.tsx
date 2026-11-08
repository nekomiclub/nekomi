import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlightClass: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M550-440q-28.87 0-49.44-20.56Q480-481.13 480-510v-220q0-28.88 20.56-49.44Q521.13-800 550-800h100q28.88 0 49.44 20.56T720-730v220q0 28.87-20.56 49.44Q678.88-440 650-440zm-10-60h120v-240H540zM372-240q-23 0-42-13.5T305-290L200-643v-157h60v148l104.55 352H720v60zm-52 120v-60h400v60zm220-620h120z" /></svg>;
export default MaterialFlightClass;