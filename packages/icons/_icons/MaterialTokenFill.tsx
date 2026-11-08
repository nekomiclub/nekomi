import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTokenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M366-578 153-703l327-177 327 177-213 125q-23-23-52.5-37.5T480-630t-61.5 14.5T366-578m84 481L120-286v-368l217 129q-4 11-5.5 22.5T330-480q0 53 34 93t86 54zm-34-319q-26-26-26-64t26-64 64-26 64 26 26 64-26 64-64 26-64-26m94 319v-236q52-14 86-54t34-93q0-11-1.5-22.5T623-525l217-129v368z" /></svg>;
export default MaterialTokenFill;