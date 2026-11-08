import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlexNoWrapFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-280v-400h240v400zm320 0v-400h240v400zm320 0v-400h240v400zm-580-60h120v-280H100zm640 0h120v-280H740z" /></svg>;
export default MaterialFlexNoWrapFill;