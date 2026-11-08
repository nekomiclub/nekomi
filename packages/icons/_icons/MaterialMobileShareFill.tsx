import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileShareFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-330h60v-120h143l-54 53 43 43 126-126-126-126-42 42 53 54H380q-25 0-42.5 17.5T320-450zM260-40q-25 0-42.5-17.5T200-100v-760q0-24 18-42t42-18h438q25 0 42.5 17.5T758-860v150q18 3 30 17t12 32v74q0 19-12 33t-30 17v437q0 25-17.5 42.5T698-40z" /></svg>;
export default MaterialMobileShareFill;