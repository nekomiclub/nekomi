import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBlurLinearFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M237.5-278.5Q255-296 255-319t-17.5-40.5T197-377t-40.5 17.5T139-319t17.5 40.5T197-261t40.5-17.5M387-456q11-11 11-27t-11-27-27-11-27 11-11 27 11 27 27 11 27-11m0-164q11-11 11-27t-11-27-27-11-27 11-11 27 11 27 27 11 27-11m-149.5 13.5Q255-624 255-647t-17.5-40.5T197-705t-40.5 17.5T139-647t17.5 40.5T197-589t40.5-17.5m0 164Q255-460 255-483t-17.5-40.5T197-541t-40.5 17.5T139-483t17.5 40.5T197-425t40.5-17.5M387-288q11-11 11-27t-11-27-27-11-27 11-11 27 11 27 27 11 27-11m322-15q7-7 7-16t-7-16-16-7-16 7-7 16 7 16 16 7 16-7m0-328q7-7 7-16t-7-16-16-7-16 7-7 16 7 16 16 7 16-7m0 164q7-7 7-16t-7-16-16-7-16 7-7 16 7 16 16 7 16-7M552-620q11-11 11-27t-11-27-27-11-27 11-11 27 11 27 27 11 27-11m0 164q11-11 11-27t-11-27-27-11-27 11-11 27 11 27 27 11 27-11m0 168q11-11 11-27t-11-27-27-11-27 11-11 27 11 27 27 11 27-11M120-120v-720h720v720z" /></svg>;
export default MaterialBlurLinearFill;