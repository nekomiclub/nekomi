import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDonutSmallFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M594-521q-8-26-27.5-44T521-591v-287q143 14 243 114t114 243zM439-82Q286-96 183.5-209T81-477t102-270.5T439-878v287q-35 14-56.5 45T361-477q0 36 21.5 65t56.5 42zm82 0v-288q26-8 45.5-25.5T594-439h284q-14 143-114 243T521-82" /></svg>;
export default MaterialDonutSmallFill;