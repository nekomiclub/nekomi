import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBackpack: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-510q0-55 34-95.5t86-50.5v-84h100v80h200v-80h100v84q52 10 86 50.5t34 95.5v510q0 24.75-17.62 42.37Q764.75-80 740-80zm0-60h520v-510q0-38-26-64t-64-26H310q-37.12 0-63.56 26T220-650zm400-190h60v-140H280v60h340zM480-440" /></svg>;
export default MaterialBackpack;