import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOutpatientMed: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m780-339-42-43 68-68H640v-59h165l-68-68 43-43 140 140.5zM80-780v-60h480v60zm190 510h100v-100h100v-100H370v-100H270v100H170v100h100zM100-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h440q24 0 42 18t18 42v480q0 24-18 42t-42 18zm0-60h440v-480H100zm220-240" /></svg>;
export default MaterialOutpatientMed;