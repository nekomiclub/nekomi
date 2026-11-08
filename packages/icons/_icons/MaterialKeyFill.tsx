import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M371.5-388.5Q409-426 409-480t-37.5-91.5T280-609t-91.5 37.5T151-480t37.5 91.5T280-351t91.5-37.5M280-240q-100 0-170-70T40-480t70-170 170-70q85 0 142.5 46.5T503-555h344l73 73-127 146-103-84-84 84-71-71h-32q-19 75-80.5 121T280-240" /></svg>;
export default MaterialKeyFill;