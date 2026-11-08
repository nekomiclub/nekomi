import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTimerArrowUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M129-246.06q-86-86.06-86-209T129.04-664 338-750q53.08 0 100.04 17T523-685l46-46 42 42-46 46q32 38 50 86t18 102q0 122.92-86.06 208.96t-209 86.04T129-246.06M762-160v-526l-57 57-42-42 129-129 128 129-42 42-56-56v525zM246-820v-60h184v60zm258.5 531.69q68.5-68.31 68.5-166.5T504.69-621.5 338.19-690 171.5-621.69 103-455.19t68.31 166.69 166.5 68.5 166.69-68.31M308-428h60v-183h-60zm30-27" /></svg>;
export default MaterialTimerArrowUp;