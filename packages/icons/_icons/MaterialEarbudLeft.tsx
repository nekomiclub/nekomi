import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEarbudLeft: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M303-80q-24 0-42-18t-18-42v-351h-63q-24 0-42-18t-18-42v-189q0-24 18-42t42-18h394v60H180v189h123v411h106v-411h165v60H469v351q0 24-18 42t-42 18zm271-329v-471h30q98.33 0 167.17 68.56Q840-742.88 840-644.94T771.17-478Q702.33-409 604-409zm60-62q63-16 104.5-63.5T780-645t-41.5-110T634-818zm0-174" /></svg>;
export default MaterialEarbudLeft;