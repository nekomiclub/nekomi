import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyVerticalFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M572.5-588.5Q610-626 610-680t-37.5-91.5T481-809t-91.5 37.5T352-680t37.5 91.5T481-551t91.5-37.5M483-40 337-167l84-103-84-84 71-71v-32q-75-19-121-80.5T241-680q0-100 70-170t170-70 170 70 70 170q0 85-46.5 142.5T556-457v344z" /></svg>;
export default MaterialKeyVerticalFill;