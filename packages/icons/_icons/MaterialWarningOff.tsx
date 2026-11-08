import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWarningOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M462.5-245.5Q454-254 454-267t8.5-21.5T484-297t21.5 8.5T514-267t-8.5 21.5T484-237t-21.5-8.5M454-348v-158l60 60v98zm459 216L749-296 480-760l-72 123-43-44 115-199zm-769-48h550L346-528zM837-37l-83-83H40l262-452L37-837l43-43L880-80zM578-467" /></svg>;
export default MaterialWarningOff;