import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTimerArrowDownFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M129-246q-86-86-86-209t86-209 209-86q53 0 100 17t85 48l46-46 42 42-46 46q32 38 50 86t18 102q0 123-86 209t-209 86-209-86m663 86L663-289l42-42 57 57v-526h60v525l56-56 42 42zM246-820v-60h184v60zm62 392h60v-183h-60z" /></svg>;
export default MaterialTimerArrowDownFill;