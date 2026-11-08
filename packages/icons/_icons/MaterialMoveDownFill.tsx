import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoveDownFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m280-120-43-43 86-86q-116 6-199.5-73.5T40-520q0-117 81.5-198.5T320-800h120v60H320q-92 0-156 64t-64 156q0 91 67 152.5T326-308l-89-89 43-43 160 160zm240-40v-280h360v280zm0-360v-280h360v280zm60-60h240v-160H580z" /></svg>;
export default MaterialMoveDownFill;