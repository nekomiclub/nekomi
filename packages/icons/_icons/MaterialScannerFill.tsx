import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScannerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M751-460 146-700l22-60 615 244q32 13 44.5 34t12.5 57v205q0 24-18 42t-42 18H180q-24 0-42-18t-18-42v-180q0-24 18-42t42-18zM380-280h340v-60H380zm-88.5-8.5Q300-297 300-310t-8.5-21.5T270-340t-21.5 8.5T240-310t8.5 21.5T270-280t21.5-8.5" /></svg>;
export default MaterialScannerFill;