import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLineStartCircleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-240q-100 0-170-70T80-480t70-170 170-70q92 0 159.5 60.5T558-510h322v60H558q-11 89-78.5 149.5T320-240" /></svg>;
export default MaterialLineStartCircleFill;