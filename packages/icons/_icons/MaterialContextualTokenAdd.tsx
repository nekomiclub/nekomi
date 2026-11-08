import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContextualTokenAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M820-160H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h460v60H140v520h680v-347h60v347q0 24-18 42t-42 18M244-325h266v-102H244zm0-207h266v-102H244zm370 207h102v-242H614zM140-220v-520zm600-400v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialContextualTokenAdd;