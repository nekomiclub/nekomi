import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignpost: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-80v-190H230L120-380l110-110h220v-90H160v-220h290v-80h60v80h220l110 110-110 110H510v90h290v220H510v190zM220-640h485l50-50-50-50H220zm35 310h485v-100H255l-50 50zm-35-310v-100zm520 310v-100z" /></svg>;
export default MaterialSignpost;