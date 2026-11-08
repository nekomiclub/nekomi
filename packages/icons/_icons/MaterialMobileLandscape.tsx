import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileLandscape: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-200q-24 0-42-18t-18-42v-438q0-24.75 17.63-42.38Q75.25-758 100-758h150q3-18 16.95-30 13.96-12 31.63-12H373q19 0 33 12t17 30h437q24.75 0 42.38 17.62Q920-722.75 920-698v438q0 24.75-17.62 42.37Q884.75-200 860-200zm760-60v-438H100v438zM100-698v438zm131 240q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9" /></svg>;
export default MaterialMobileLandscape;