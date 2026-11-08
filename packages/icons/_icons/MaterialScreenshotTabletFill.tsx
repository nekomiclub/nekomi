import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScreenshotTabletFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-160q-24.75 0-42.37-17.63Q40-195.25 40-220v-520q0-24.75 17.63-42.38Q75.25-800 100-800h760q24.75 0 42.38 17.62Q920-764.75 920-740v520q0 24.75-17.62 42.37Q884.75-160 860-160zm90-60h580v-520H190zm360-60h160v-160h-40v120H550zM250-520h40v-120h120v-40H250z" /></svg>;
export default MaterialScreenshotTabletFill;