import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDresserFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-660q0-24.75 17.63-42.38Q195.25-840 220-840h520q24.75 0 42.38 17.62Q800-804.75 800-780v660h-60v-80H220v80zm60-400h230v-260H220zm290-160h230v-100H510zm0 160h230v-100H510zM410-330h140v-60H410z" /></svg>;
export default MaterialDresserFill;