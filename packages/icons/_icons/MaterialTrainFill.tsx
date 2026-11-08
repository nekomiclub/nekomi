import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTrainFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-340v-380q0-41 19-71.5t58.5-50 100-29T480-880q86 0 146.5 9t99 28.5T782-793t18 73v380q0 59-40.5 99.5T660-200l60 60v20h-70l-80-80H390l-80 80h-70v-20l60-60q-59 0-99.5-40.5T160-340m60-205h234v-155H220zm294 0h226v-155H514zM374-331q16-16 16-39t-16-39-39-16-39 16-16 39 16 39 39 16 39-16m290 0q16-16 16-39t-16-39-39-16-39 16-16 39 16 39 39 16 39-16" /></svg>;
export default MaterialTrainFill;