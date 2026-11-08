import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileTextFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-40q-25 0-42.5-17.5T200-100v-760q0-24 18-42t42-18h438q25 0 42.5 17.5T758-860v150q18 3 30 17t12 32v74q0 19-12 33t-30 17v437q0 25-17.5 42.5T698-40zm60-459h318v-60H320z" /></svg>;
export default MaterialMobileTextFill;