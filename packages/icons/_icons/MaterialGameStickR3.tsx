import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameStickR3: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-786 380-919h200zm241 429q99-52 99-126t-99-126-241-52-241 52-99 126 99 126 241 52 241-52m-47 81v136q0 25-17.5 42.5T614-80H345q-25 0-42.5-17.5T285-140v-136q-92-31-148.5-85.5T80-483q0-99 116.5-168T480-720t283.5 69T880-483q0 67-56.5 122T674-276M416-377h30v-82h37l49 82h34l-56-91q20-8 30-21.5t10-33.5q0-30-19-45t-56-15h-59zm30-110v-67h27q23 0 34.5 8t11.5 25q0 18-11 26t-35 8z" /></svg>;
export default MaterialGameStickR3;