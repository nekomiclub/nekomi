import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNightSightMaxFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M690-530v-120H570v-60h120v-120h60v120h120v60H750v120zM440-130q-129 0-219.5-90.5T130-440t90.5-219.5T440-750q-23 27-36.5 66.5T390-600q0 103 73.5 176.5T640-350q28.09 0 53.54-5.5Q719-361 742-372q-23 104-106.5 173T440-130" /></svg>;
export default MaterialNightSightMaxFill;