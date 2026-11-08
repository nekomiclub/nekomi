import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPropane: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-300h400q75 0 127.5-52.5T860-480t-52.5-127.5T680-660H280q-75 0-127.5 52.5T100-480t52.5 127.5T280-300m110-420h180v-50H390zM280-120v-120q-100 0-170-70T40-480t70-170 170-70h40v-60q0-24 18-42t42-18h200q24 0 42 18t18 42v60h40q100 0 170 70t70 170-70 170-170 70v120h-60v-120H340v120z" /></svg>;
export default MaterialPropane;