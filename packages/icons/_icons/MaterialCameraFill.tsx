import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCameraFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m445-622 140-244q90 23 162.5 89T854-622zM340-520 200-764q57-56 128.5-86T477-880q17 0 36.5 1.5T544-875zM93-379q-7-24-10-49t-3-50q0-72 23.5-137T172-734l203 355zM373-95q-90-25-161-90.5T106-339h408zm115 15q-20 0-40.5-2T414-86l205-353 141 244q-57 56-128 85.5T488-80m301-147L583-582h284q7 26 10 52t3 50q0 69-23.5 134T789-227" /></svg>;
export default MaterialCameraFill;