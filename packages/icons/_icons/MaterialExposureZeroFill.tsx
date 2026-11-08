import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExposureZeroFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-279.5Q260-359 260-480t60-200.5T480-760t160 79.5T700-480t-60 200.5T480-200t-160-79.5m274-48Q632-393 632-480t-38-152.5T480-698t-114 65.5T328-480t38 152.5T480-262t114-65.5" /></svg>;
export default MaterialExposureZeroFill;