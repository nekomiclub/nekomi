import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBikeDock: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60l197-50 58-556q2-23 19-38.5t40-15.5h92q23 0 40 15.5t19 38.5l58 556 197 50v60zm320-100h80v-520q0-17-11.5-28.5T480-780t-28.5 11.5T440-740z" /></svg>;
export default MaterialBikeDock;