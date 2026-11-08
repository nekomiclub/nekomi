import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignalWifiOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m703-343-41-41 210-210q-87-68-184.5-107T480-740q-40 0-78.5 5T326-719l-49-49q49-16 99.5-24t103.5-8q137 0 259 53t221 147zM480-202l96-96-372-372q-30 16-59 35t-57 41zM837-37 617-257 480-120 0-600q36-35 75.5-64t82.5-52L37-837l43-43L880-80zM390-484" /></svg>;
export default MaterialSignalWifiOff;