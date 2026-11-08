import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoneyBag: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M332-120q-88 0-150-62t-62-150q0-38 13-72.5t36-63.5l152-182-95-190h509l-95 190 151 182q24 29 36.5 63.5T841-332q0 88-62 150t-150 62zm148-218q-25 0-42-17.5T421-398t17-42.5 42-17.5q26 0 43.5 17.5T541-398t-17.5 42.5T480-338M375-675h210l53-105H323zm-43 495h296q63 0 107.5-44.5T780-332q0-27-9-52t-26-45L590-615H370L216-429q-17 20-26.5 45t-9.5 52q0 63 44.5 107.5T332-180" /></svg>;
export default MaterialMoneyBag;