import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirplayFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m273-119 207-207 206 207zm-133-81q-25 0-42.5-17.5T80-260v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 25-17.5 43T820-199H691L479-411 267-200z" /></svg>;
export default MaterialAirplayFill;