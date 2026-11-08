import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDirectionsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-360h60v-130h184v85l116-115-116-116v86H350q-13 0-21.5 8.5T320-520zM480-77q-12 0-23.5-4T437-93L93-437q-8-8-12-19.5T77-480t4-23.5T93-523l344-344q8-8 19.5-12t23.5-4 23.5 4 19.5 12l344 344q8 8 12 19.5t4 23.5-4 23.5-12 19.5L523-93q-8 8-19.5 12T480-77" /></svg>;
export default MaterialDirectionsFill;