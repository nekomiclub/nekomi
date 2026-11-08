import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialClockArrowDownFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M129-276q-86-86-86-209t86-209 209-86 209 86 86 209-86 209-209 86-209-86m663 116L663-289l42-42 56 56v-525h60v526l57-57 42 42zM421-354l41-41-94-94v-149h-60v172z" /></svg>;
export default MaterialClockArrowDownFill;