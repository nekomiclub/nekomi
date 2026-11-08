import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatTextOverflow: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-160v-640h60v640zm512-193-42-42 55-55H320v-60h365l-55-55 42-42 128 127zM500-160v-190h60v190zm0-450v-190h60v190z" /></svg>;
export default MaterialFormatTextOverflow;