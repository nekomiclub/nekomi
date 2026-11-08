import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExposureNeg2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M484-200v-70l207-211q34-35 49.5-64t15.5-60q0-42-25-66.5T662-696q-38 0-66 18.5T556-627l-62-25q20-50 65.5-79T662-760q71 0 115.5 43T822-605q0 41-19 79t-64 83L563-263l2 3h275v60zm-84-210H120v-60h280z" /></svg>;
export default MaterialExposureNeg2;