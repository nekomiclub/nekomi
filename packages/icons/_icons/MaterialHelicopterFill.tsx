import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHelicopterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M370-430v-270h-10q-109 0-184.5 76T100-440v10zM520-80H120v-60h400zm80-120H100q-25 0-42.5-17.5T40-260v-180q0-134 93-227t227-93h240v200h200l40-80h80v280l-320 34zm160-620H120v-60h640z" /></svg>;
export default MaterialHelicopterFill;