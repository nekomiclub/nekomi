import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHostFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h240q24 0 42 18t18 42v600q0 24-18 42t-42 18zm440 0q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h240q24 0 42 18t18 42v600q0 24-18 42t-42 18zM200-367h120v-60H200zm440 0h120v-60H640zM200-491h120v-60H200zm440 0h120v-60H640zM200-615h120v-60H200zm440 0h120v-60H640z" /></svg>;
export default MaterialHostFill;