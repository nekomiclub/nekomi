import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileLockLandscape: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-200q-24 0-42-18t-18-42v-438q0-24.75 17.63-42.38Q75.25-758 100-758h150q3-18 16.95-30 13.96-12 31.63-12H373q19 0 33 12t17 30h437q24.75 0 42.38 17.62Q920-722.75 920-698v438q0 24.75-17.62 42.37Q884.75-200 860-200zm760-60v-438H100v438zM100-698v438zm290 378h180q12 0 21-8.34 9-8.33 9-20.66v-141q0-12.75-8.62-21.38Q582.75-520 570-520h-10v-40q0-33-23.5-56.5T480-640t-56.5 23.5T400-560v40h-10q-12.75 0-21.37 8.62Q360-502.75 360-490v140q0 12.75 8.63 21.37Q377.25-320 390-320m40-200v-40q0-20 15-33.5t35-13.5 35 13.51q15 13.52 15 33.49v40z" /></svg>;
export default MaterialMobileLockLandscape;