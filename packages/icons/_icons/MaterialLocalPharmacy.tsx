import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocalPharmacy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60l87-255-87-255v-60h527l62-170 68 27-52 143h115v60l-88 255 88 255v60zm332-161h60v-124h124v-60H512v-124h-60v124H328v60h124zM182-180h596l-88-255 88-255H182l88 255zm298-255" /></svg>;
export default MaterialLocalPharmacy;