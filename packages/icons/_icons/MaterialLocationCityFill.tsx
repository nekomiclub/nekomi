import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocationCityFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-558h247v-92l113-110 113 110v258h247v392zm60-60h106v-106H180zm0-166h106v-106H180zm0-166h106v-106H180zm247 332h106v-106H427zm0-166h106v-106H427zm0-166h106v-106H427zm0-166h106v-106H427zm247 498h106v-106H674zm0-166h106v-106H674z" /></svg>;
export default MaterialLocationCityFill;