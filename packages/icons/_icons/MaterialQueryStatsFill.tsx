import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialQueryStatsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m89-412-49-36 193-310 125 146 165-268 125 186 143-226 48 35-190 301-124-184-159 258-125-146zm494 192q48 0 82.5-33.5T700-335q0-49-34-83t-83-34q-48 0-81.5 34.5T468-335t33.5 81.5T583-220M797-80 685-192q-22 15-47.5 23.5T583-160q-73 0-124-51t-51-124 51-125 124-52q74 0 125.5 51.5T760-335q0 29-8.5 54.5T727-233l112 111z" /></svg>;
export default MaterialQueryStatsFill;