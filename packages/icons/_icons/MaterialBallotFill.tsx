import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBallotFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M453-565h228v-60H453zm0 230h228v-60H453zm-68.5-223.5Q400-574 400-595t-15.5-36.5T348-647t-36.5 15.5T296-595t15.5 36.5T348-543t36.5-15.5m0 230Q400-344 400-365t-15.5-36.5T348-417t-36.5 15.5T296-365t15.5 36.5T348-313t36.5-15.5M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialBallotFill;