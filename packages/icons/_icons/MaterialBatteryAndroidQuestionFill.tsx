import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryAndroidQuestionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M130-240q-38 0-64-26t-26-64v-300q0-38 26-64t64-26h599q-23 10-41.5 25T655-660l-39 96 98 39v225q2 19 12 34t25 26zm644-169q0-18 2.5-32.5T784-468q5-11 13-21.5t25-25.5q19-17 27.5-31.5T858-576q0-21-16.5-36T802-627t-40.5 12.5T736-581l-45-18q11-34 42-55t69-21q45 0 75.5 28t30.5 69q0 23-12 46t-36 45q-11 11-18 19t-11 16q-3 6-7 43zm-1 113q-11-11-11-26t11-26 26-11 26 11 11 26-11 26-26 11-26-11" /></svg>;
export default MaterialBatteryAndroidQuestionFill;