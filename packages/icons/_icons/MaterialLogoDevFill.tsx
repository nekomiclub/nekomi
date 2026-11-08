import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLogoDevFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M216-357h100q20.65 0 35.33-14.67Q366-386.35 366-407v-146q0-20.65-14.67-35.33Q336.65-603 316-603H216zm50-50v-146h50v146zm166 50h102v-50h-82v-52h52v-43h-52v-51h82v-50H432.47q-13.47 0-21.97 8.5T402-573v185.6q0 13.4 8.5 21.9T432-357m255.61-9.5Q698-375 702-388l66-215h-52l-53 170-53-170h-52l66 215q4 13 14.39 21.5T663-358t24.61-8.5M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialLogoDevFill;