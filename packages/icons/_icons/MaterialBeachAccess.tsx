import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBeachAccess: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M794-128 531-391l46-46 263 263zm-570-46q-53-58-78.5-128.5T120-446q0-78 29-152t88-133 133.5-88T523-848q73 0 143.5 25.5T794-744zm3-89 69-70q-16-22-32-47.5t-29.5-54-22.5-59-12-62.5q-27 74-18.5 151T227-263m117-115 246-248q-46-36-93.5-56.5t-90.5-27-76.5 0T278-685t-23 51.5 2.5 75 29 88T344-378m291-294 72-69q-66-42-143.5-49T412-768q30 3 59.5 12t58 21.5 55 28.5 50.5 34" /></svg>;
export default MaterialBeachAccess;