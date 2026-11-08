import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAppRegistrationFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M179-179q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19m0-254q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19m0-254q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19m254 0q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19m254 0q-19-19-19-47t19-47 47-19 47 19 19 47-19 47-47 19-47-19M433.5-433.5Q414-453 414-480t19.5-46.5T480-546t46.5 19.5T546-480t-19.5 46.5T480-414t-46.5-19.5M520-160v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5T862-380L643-160zm263-224 37-39-37-37-38 38z" /></svg>;
export default MaterialAppRegistrationFill;