import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpatialGalleryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M370-245v-205h220v205zm0-264v-197h220v197zm-280-1v-276l220 63v213zm0 337v-277h220v218zm780 0-220-58v-219h220zM650-510v-213l220-59v272z" /></svg>;
export default MaterialSpatialGalleryFill;