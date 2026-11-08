import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBackgroundGridSmall: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-180h105v-105H180zm165 0h105v-105H345zm165 0h105v-105H510zm165 0h105v-105H675zM180-675h105v-105H180zm0 165h105v-105H180zm0 165h105v-105H180zm165-330h105v-105H345zm0 165h105v-105H345zm0 165h105v-105H345zm165-330h105v-105H510zm0 165h105v-105H510zm0 165h105v-105H510zm165-330h105v-105H675zm0 165h105v-105H675zm0 165h105v-105H675zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialBackgroundGridSmall;