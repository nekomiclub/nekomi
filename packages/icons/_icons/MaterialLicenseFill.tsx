import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLicenseFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M402.5-482.5Q370-515 370-560t32.5-77.5T480-670t77.5 32.5T590-560t-32.5 77.5T480-450t-77.5-32.5M244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92 228 92 92 228q0 57-19.5 113T716-344v304l-236-79zm420.5-335.5Q740-451 740-560t-75.5-184.5T480-820t-184.5 75.5T220-560t75.5 184.5T480-300t184.5-75.5" /></svg>;
export default MaterialLicenseFill;