import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestWifiRouter: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-120q-100 0-170-70t-70-170v-240q0-100 70-170t170-70h240q100 0 170 70t70 170v240q0 100-70 170t-170 70zM180-360h600v-240q0-75-52.5-127.5T600-780H360q-75 0-127.5 52.5T180-600zm11 60q19 57 68 88.5T360-180h240q53 0 101.5-31.5T769-300zm289-60" /></svg>;
export default MaterialNestWifiRouter;