import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSdkFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-25 0-42.5-17.5T120-180v-535q0-10 3.5-18.5T134-750l57-74q6-8 14.5-12t18.5-4h513q10 0 18.5 4t14.5 12l57 74q5 8 9 16.5t4 18.5v535q0 25-17.5 42.5T780-120zm18-615h564l-36-45H234zm392 438 130-130-130-130-40 40 90 90-90 90zm-220 4 40-40-90-90 90-90-40-40-130 130z" /></svg>;
export default MaterialSdkFill;