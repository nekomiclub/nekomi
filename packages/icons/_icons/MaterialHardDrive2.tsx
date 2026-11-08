import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHardDrive2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M540-200q17 0 28.5-11.5T580-240t-11.5-28.5T540-280t-28.5 11.5T500-240t11.5 28.5T540-200m140 0q17 0 28.5-11.5T720-240t-11.5-28.5T680-280t-28.5 11.5T640-240t11.5 28.5T680-200M120-430v-390q0-24 18-42t42-18h600q24 0 42 18t18 42v390h-60v-390H180v390zm60 60v230h600v-230zm0 290q-24 0-42-18t-18-42v-290h720v290q0 24-18 42t-42 18zm0-350h600zm0 60h600z" /></svg>;
export default MaterialHardDrive2;