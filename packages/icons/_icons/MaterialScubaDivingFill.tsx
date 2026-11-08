import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScubaDivingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M144-40 96-76l109-146 46-195q5-21 18-36t35-22l383-117 84-176 112-112 37 37-101 110-67 187-196 137-238 75-61 143zm-31-327q-30 0-51.5-21.5T40-440t21.5-51.5T113-513t51.5 21.5T186-440t-21.5 51.5T113-367m220-166q-20 6-37.5-4.5T272-568q-5-20 4.5-37.5T306-629l183-55 26 97z" /></svg>;
export default MaterialScubaDivingFill;