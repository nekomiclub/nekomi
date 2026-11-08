import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatImageBack: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h720v60zm0-165v-60h165v-105H120v-60h165v-105H120v-60h720v60H675v105h165v60H675v105h165v60zm225-60h270v-105H345zm0-165h270v-105H345zM120-780v-60h720v60zm360 270" /></svg>;
export default MaterialFormatImageBack;