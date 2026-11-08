import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStylusLaserPointerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M282-112q-32-32-32-78t32-78 78-32 78 32 32 78-32 78-78 32-78-32m247-100q-6-46-33.5-81.5T427-346l132-134H226q-29 0-47.5-23T160-556q0-18 9-33t24-24l498-300q14-9 30.5-4.5T746-899t4.5 30.5T733-844L314-590h420q27 0 46.5 19.5T800-524q0 17-4 32.5T781-465z" /></svg>;
export default MaterialStylusLaserPointerFill;