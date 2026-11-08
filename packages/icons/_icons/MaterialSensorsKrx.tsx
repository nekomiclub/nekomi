import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSensorsKrx: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M148-257q-32-48-50-104.5T80-480q0-63 18-119t50-104l50 34q-28 41-43 88.5T140-480t15 101 43 89zm162-53q-70-70-70-170t70-170 170-70 170 70 70 170-70 170-170 70-170-70m297.5-42.5Q660-405 660-480t-52.5-127.5T480-660t-127.5 52.5T300-480t52.5 127.5T480-300t127.5-52.5M810-257l-49-33q28-41 43-89t15-101-15-100.5-43-88.5l49-34q32 48 50.5 104T879-480q0 62-18.5 118.5T810-257M480-480" /></svg>;
export default MaterialSensorsKrx;