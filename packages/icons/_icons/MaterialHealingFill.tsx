import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHealingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M217-98 98-217q-19-17-19-43t19-43l564-564q18-18 43-17.5t43 17.5l119 119q17 18 17.5 43T867-662L303-98q-17 19-43 19t-43-19m287-158 205-205 158 158q18 18 18 43t-18 43L743-93q-17 17-40.5 14.5T662-98zm7-125q11-11 11-28t-11-28-28-11-28 11-11 28 11 28 28 11 28-11m-102-63q17 0 28-11t11-28-11-28-28-11-28 11-11 28 11 28 28 11m147 0q17 0 28-11t11-28-11-28-28-11-28 11-11 28 11 28 28 11m-299-58L95-664q-17-17-18-39.5T93-743l124-124q18-18 43-18t43 18l158 158zm254-26q11-11 11-28t-11-28-28-11-28 11-11 28 11 28 28 11 28-11" /></svg>;
export default MaterialHealingFill;