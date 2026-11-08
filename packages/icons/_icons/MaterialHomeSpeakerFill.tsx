import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHomeSpeakerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m246-468 36-254q2-8 6-14t12-9l330-132q14-5 26.5 2t14.5 22l46 385zm129 348q-72 0-117-54.5T223-301l15-107h487l13 111q8 70-37 123.5T585-120z" /></svg>;
export default MaterialHomeSpeakerFill;