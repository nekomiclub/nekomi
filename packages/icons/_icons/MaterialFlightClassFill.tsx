import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlightClassFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M550-440q-29 0-49.5-20.5T480-510v-220q0-29 20.5-49.5T550-800h100q29 0 49.5 20.5T720-730v220q0 29-20.5 49.5T650-440zM372-240q-23 0-42-13.5T305-290L200-643v-157h60v148l105 352h355v60zm-52 120v-60h400v60z" /></svg>;
export default MaterialFlightClassFill;