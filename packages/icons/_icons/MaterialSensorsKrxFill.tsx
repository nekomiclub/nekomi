import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSensorsKrxFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M148-257q-32-48-50-104.5T80-480q0-63 18-119t50-104l50 34q-27 41-42.5 88.5T140-480t15.5 101 42.5 89zm162-53q-70-70-70-170t70-170 170-70 170 70 70 170-70 170-170 70-170-70m500 53-49-33q27-41 42.5-89T819-480t-15.5-100.5T761-669l49-34q32 48 50.5 104T879-480q0 62-18.5 118.5T810-257" /></svg>;
export default MaterialSensorsKrxFill;