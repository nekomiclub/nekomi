import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestFarsightSeasonalFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-663q-20-14-40.5-20.5T398-690q-25 0-47.5 9T308-652q-19 19-28.5 42t-9.5 48q0 20 6.5 41t20.5 41q-14 20-20.5 40.5T270-398q0 25 9 47.5t29 42.5q19 19 42 28.5t48 9.5q20 0 41-6.5t41-20.5q20 14 40.5 20.5T562-270q25 0 47.5-9t42.5-29q19-19 28.5-42t9.5-48q0-20-6.5-41T663-480q14-20 20.5-40.5T690-562q0-25-9-47.5T652-652q-19-19-42-28.5t-48-9.5q-20 0-41 6.5T480-663m28.5 211.5Q520-463 520-480t-11.5-28.5T480-520t-28.5 11.5T440-480t11.5 28.5T480-440t28.5-11.5M480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80" /></svg>;
export default MaterialNestFarsightSeasonalFill;