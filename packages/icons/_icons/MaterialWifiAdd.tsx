import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWifiAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M740-120v-120H620v-60h120v-120h60v120h120v60H800v120zm-260 0L0-600q99-94 221-147t259-53 259 53 221 147L825-465l-20.5-20.5L784-506l88-88q-87-68-184.5-107T480-740t-207.5 39T88-594l392 392 60-60 20.5 20.5L581-221zm0-351" /></svg>;
export default MaterialWifiAdd;