import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDirectionsAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-77q-12 0-23.5-4T437-93L93-437q-8-8-12-19.5T77-480t4-23.5T93-523l344-344q8-8 19.5-12t23.5-4 23.5 4 19.5 12l344 344q8 8 12 19.5t4 23.5-4 23.5-12 19.5L523-93q-8 8-19.5 12T480-77m0-206 197-197-197-197-43 43 124 124H283v60h278L437-326z" /></svg>;
export default MaterialDirectionsAltFill;