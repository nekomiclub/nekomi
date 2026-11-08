import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMaleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M800-800v220h-60v-117L556-514q21 29 32.5 63.5T600-380q0 92-64 156t-156 64-156-64-64-156 64-156 156-64q36 0 70 11.5t63 32.5l184-184H580v-60zM267-493q-47 47-47 113t47 113 113 47 113-47 47-113-47-113-113-47-113 47" /></svg>;
export default MaterialMaleFill;