import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHotel: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-200v-585h60v394h353v-309h322q59.81 0 102.41 42.59Q920-614.81 920-555v355h-60v-131H100v131zm154.5-279.5Q164-510 164-555t30.5-75.5T270-661t75.5 30.5T376-555t-30.5 75.5T270-449t-75.5-30.5M513-391h347v-164q0-35.06-24.97-60.03T775-640H513zM302.5-522.5Q316-536 316-555t-13.5-32.5T270-601t-32.5 13.5T224-555t13.5 32.5T270-509t32.5-13.5M513-640v249z" /></svg>;
export default MaterialHotel;