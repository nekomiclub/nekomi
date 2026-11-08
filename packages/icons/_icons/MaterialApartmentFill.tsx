import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialApartmentFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-555h165v-165h390v330h165v390H533v-165H427v165zm60-60h105v-105H180zm0-165h105v-105H180zm0-165h105v-105H180zm165 165h105v-105H345zm0-165h105v-105H345zm0-165h105v-105H345zm165 330h105v-105H510zm0-165h105v-105H510zm0-165h105v-105H510zm165 495h105v-105H675zm0-165h105v-105H675z" /></svg>;
export default MaterialApartmentFill;