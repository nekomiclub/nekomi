import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMedicalInformationFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M290-240h60v-90h90v-60h-90v-90h-60v90h-90v60h90zm230-150h240v-40H520zm0 120h160v-40H520zM140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42-18h60q24 0 42 18t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18zm310-510h60v-230h-60z" /></svg>;
export default MaterialMedicalInformationFill;