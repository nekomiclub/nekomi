import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialClockArrowDown: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M129-276.06q-86-86.06-86-209T129.06-694t209-86T547-693.94t86 209T546.94-276t-209 86T129-276.06M792-160 663-289l42-42 56 56v-525h60v526l57-57 42 42zM504.5-318.31q68.5-68.31 68.5-166.5T504.69-651.5 338.19-720 171.5-651.69 103-485.19t68.31 166.69 166.5 68.5 166.69-68.31M421-354l41-41-94-94v-149h-60v172zm-83-131" /></svg>;
export default MaterialClockArrowDown;