import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCheckroomFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M110-160q-13 0-21.5-8.5T80-190q0-7 3-13t9-11l358-281v-55q0-12 8.5-21t20.5-9q34 0 57.5-23.5T560-661q0-33-23.5-56T480-740t-56.5 23.5T400-660h-60q0-58 41-99t99-41 99 40.5 41 98.5q0 49-31 86.5T510-523v28l358 281q6 5 9 11t3 13q0 13-8.5 21.5T850-160zm90-60h560L480-443z" /></svg>;
export default MaterialCheckroomFill;