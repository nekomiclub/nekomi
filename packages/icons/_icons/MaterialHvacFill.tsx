import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHvacFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M636-324.24q64-64.23 64-156Q700-572 635.76-636q-64.23-64-156-64Q388-700 324-635.76q-64 64.23-64 156Q260-388 324.24-324q64.23 64 156 64Q572-260 636-324.24m-212-6.26Q397-341 375-360h210q-22 19-49 29.5T480-320t-56-10.5M342-400q-8-14-13-29t-7-31h316q-2 16-7 31t-13 29zm-20-100q2-16 7-31t13-29h276q8 14 13 29t7 31zm53-100q22-19 49-29.5t56-10.5 56 10.5 49 29.5zM180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120z" /></svg>;
export default MaterialHvacFill;