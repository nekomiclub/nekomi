import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGif2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-280q-24.75 0-42.37-17.63Q80-315.25 80-340v-280q0-24.75 17.63-42.38Q115.25-680 140-680h180q26 0 45.5 17t23.5 43H140v280h190v-110h-80v-60h140v170q0 24.75-17.62 42.37Q354.75-280 330-280zm345 0v-400h60v400zm155 0v-400h280v60H700v120h180v60H700v160z" /></svg>;
export default MaterialGif2Fill;