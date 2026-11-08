import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddCardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-501h680v-139H140zM780-80v-120H660v-60h120v-120h60v120h120v60H840v120zm-640-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v300H780q-74.7 0-127.35 52.65T600-260v100z" /></svg>;
export default MaterialAddCardFill;