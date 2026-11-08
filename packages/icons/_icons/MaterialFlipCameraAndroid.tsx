import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlipCameraAndroid: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-140 0-248-86T93-389h61q30 111 120.5 180T480-140q98 0 180.5-50.5T788-328H657v-61h223v229h-59v-109q-57 88-147 138.5T480-80m-71-329q-30-30-30-72t30-72 72-30 72 30 30 72-30 72-72 30-72-30M80-572v-228h60v107q57-88 146.5-137.5T480-880q140 0 248.5 85.5T868-572h-61q-30-111-121-180t-206-69q-97 0-179 51T173-633h131v61z" /></svg>;
export default MaterialFlipCameraAndroid;