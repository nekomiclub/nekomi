import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLink2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M313-120q-81 0-137-56t-56-137q0-38 14.5-73.5T176-449l146-146 42 43-146 145q-19 19-29 43.5T179-313q0 56 39 94.5t95 38.5q26 0 50.5-10t43.5-29l146-145 42 42-146 146q-27 27-62.5 41.5T313-120m81-231-43-43 215-214 42 42zm244-14-43-42 146-146q18-18 28-41.5t10-49.5q0-56-38.5-95.5T646-779q-26 0-50 9.5T553-741L407-595l-42-42 146-146q27-27 62.5-42t73.5-15q81 0 137 56.5T840-646q0 38-14.5 73.5T784-510z" /></svg>;
export default MaterialLink2;