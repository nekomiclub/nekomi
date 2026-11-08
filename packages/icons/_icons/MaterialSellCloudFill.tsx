import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSellCloudFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M385-80q-24-26-34.5-56T340-200q0-63 38-111t98-63q27-40 70-63t94-23q17 0 37 3.5t36 9.5v-155q0-11-5.5-23T694-645L477-862q-9-9-20-13.5t-22-4.5q-12 0-23 4.5T392-862L176-646q-9 9-13 20.5t-4 22.5v463q0 25 17.5 42.5T219-80zm51-540q-22 0-37-15t-15-37q0-21 15-36t37-15 37 15 15 36q0 22-15 37t-37 15m84 540q-51 0-85.5-34.5T400-200q0-48 33-82.5t81-37.5q17-37 50.5-58.5T640-400q49 0 89 26.5t49 73.5h2q43 0 71.5 32.5T880-190t-28.5 77.5T780-80z" /></svg>;
export default MaterialSellCloudFill;