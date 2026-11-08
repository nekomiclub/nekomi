import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTableEditFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-400v-220h330v220zm0-280v-100q0-25 17.5-42.5T180-840h600q25 0 42.5 17.5T840-780v100zm60 560q-25 0-42.5-17.5T120-180v-160h330v220zm330-280v-220h330v119q-33-19-71.5-14.5T702-483l-83 83zm10 320v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5T862-300L643-80zm263-224 37-39-37-37-38 38z" /></svg>;
export default MaterialTableEditFill;