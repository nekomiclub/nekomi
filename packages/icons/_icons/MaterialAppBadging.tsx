import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAppBadging: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-480q0-95 40.5-175T228-790t153.5-78.5T562-872q12 2 18.5 13t2.5 23-15 18-24 4q-78-15-150 4.5T265-743t-91 114.5T140-480q0 141 99.5 240.5T480-140q80 0 147.5-33.5T742-264q49-59 68-132t4-148q-2-13 4-24t18-15 23 2.5 13 18.5q19 92-4 178.5T791-229q-57 72-138 110.5T480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480m640-130q-45 0-77.5-32.5T610-720q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 45-32 77.5T720-610" /></svg>;
export default MaterialAppBadging;