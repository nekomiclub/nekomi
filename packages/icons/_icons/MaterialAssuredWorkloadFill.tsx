import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAssuredWorkloadFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M212-241v-339h60v339zm242 0v-339h60v339zM80-640v-53l400-228 400 228v53zm0 519v-60h500q2 14 3.5 28.5T591-121zm608-291v-168h60v138zM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0m-21-120 142-142-28-28-114 114-59-59-28 28z" /></svg>;
export default MaterialAssuredWorkloadFill;