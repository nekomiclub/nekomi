import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatListNumberedRtlFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M680-80v-60h100v-30h-60v-60h60v-30H680v-60h120q17 0 28.5 11.5T840-280v40q0 17-11.5 28.5T800-200q17 0 28.5 11.5T840-160v40q0 17-11.5 28.5T800-80zm0-280v-110q0-17 11.5-28.5T720-510h60v-30H680v-60h120q17 0 28.5 11.5T840-560v70q0 17-11.5 28.5T800-450h-60v30h100v60zm60-280v-180h-60v-60h120v240zM120-209v-60h471v60zm0-243v-60h471v60zm0-243v-60h471v60z" /></svg>;
export default MaterialFormatListNumberedRtlFill;