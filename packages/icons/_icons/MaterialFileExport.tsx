import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileExport: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m201-79-42-43 128-128H161v-60h228v228h-60v-125zm248-1v-60h291v-460H520v-220H220v450h-60v-450q0-24.75 17.63-42.38Q195.25-880 220-880h340l240 240v500q0 24.75-17.62 42.37Q764.75-80 740-80z" /></svg>;
export default MaterialFileExport;