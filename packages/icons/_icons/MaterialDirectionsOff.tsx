import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDirectionsOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M833-41 652-222 523-93q-8 8-19.55 12t-23.5 4-23.45-4T437-93L93-437q-8-8-12-19.55t-4-23.5 4-23.45T93-523l129-129L26-848l43-43L876-84zM609-265 265-609 136-480l344 344zm129-43-43-43 129-129-344-344-129 129-43-43 129-129q8-8 19.55-12t23.5-4 23.45 4 19.5 12l344 344q8 8 12 19.55t4 23.5-4 23.45-12 19.5zm-418-52v-160q0-12.75 8.63-21.38Q337.25-550 350-550h60l60 60h-90v130zm283-83 77-77-116-116v86h-68z" /></svg>;
export default MaterialDirectionsOff;