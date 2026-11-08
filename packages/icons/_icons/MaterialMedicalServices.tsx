import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMedicalServices: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h180v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h180q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm240-580h200v-100H380zM140-140v-520zm310-230v120h60v-120h120v-60H510v-120h-60v120H330v60z" /></svg>;
export default MaterialMedicalServices;