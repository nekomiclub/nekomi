import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHelpCenterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M504-257q11-11 11-27t-11-27-27-11-27 11-11 27 11 27 27 11 27-11m-60-137h57q0-31 10-50.5t35-44.5q33-33 46-58.5t13-53.5q0-53-34-84t-92-31q-51 0-87.5 24.5T338-624l53 22q14-28 36-42.5t52-14.5q32 0 50.5 16t18.5 44q0 20-11 38.5T500-517q-37 35-46.5 60t-9.5 63M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialHelpCenterFill;