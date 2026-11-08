import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileLandscapeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-200q-24 0-42-18t-18-42v-438q0-25 17.5-42.5T100-758h150q3-18 17-30t32-12h74q19 0 33 12t17 30h437q25 0 42.5 17.5T920-698v438q0 25-17.5 42.5T860-200zm131-258q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9" /></svg>;
export default MaterialMobileLandscapeFill;