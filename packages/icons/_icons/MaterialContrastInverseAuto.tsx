import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContrastInverseAuto: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-480q0-83 31.5-156T197-763t127-85.5T480-880h4q-14 14-26 30t-22 33q-128 17-212 111t-84 226q0 138 91.5 234T460-140v-314h419q-5 78-38 146.5t-87 119T630-109 480-80q-83 0-156-31.5T197-197t-85.5-127T80-480m437-34 150-385h53l150 385h-56l-43-112H616l-43 112zm115-159h123l-54-148h-15z" /></svg>;
export default MaterialContrastInverseAuto;