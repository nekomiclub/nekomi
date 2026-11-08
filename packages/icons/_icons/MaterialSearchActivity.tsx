import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSearchActivity: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M581.5-781.64q-11.5-11.64-11.5-28.5t11.64-28.36 28.5-11.5 28.36 11.64 11.5 28.5-11.64 28.36-28.5 11.5-28.36-11.64m0 660q-11.5-11.64-11.5-28.5t11.64-28.36 28.5-11.5 28.36 11.64 11.5 28.5-11.64 28.36-28.5 11.5-28.36-11.64m160-520q-11.5-11.64-11.5-28.5t11.64-28.36 28.5-11.5 28.36 11.64 11.5 28.5-11.64 28.36-28.5 11.5-28.36-11.64m0 380q-11.5-11.64-11.5-28.5t11.64-28.36 28.5-11.5 28.36 11.64 11.5 28.5-11.64 28.36-28.5 11.5-28.36-11.64m60-190q-11.5-11.64-11.5-28.5t11.64-28.36 28.5-11.5 28.36 11.64 11.5 28.5-11.64 28.36-28.5 11.5-28.36-11.64M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880v60q-142 0-241 99t-99 241 98.81 241q98.82 99 241.19 99zm132-226L450-468v-202h60v178.46L654-348z" /></svg>;
export default MaterialSearchActivity;