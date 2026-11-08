import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoLuggageFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m833-41-94-94q-8 7-17.82 11-9.81 4-21.18 4 0 17-11.5 28.5T660-80t-28.5-11.5T620-120H340q0 17-11.5 28.5T300-80t-28.5-11.5T260-120q-24.75 0-42.37-17.63Q200-155.25 200-180v-486.5q0-3.5 1-6.5L26-848l43-43L876-84zM365-240h60v-209l-60-60zm170 0h60v-39l-60-60zm225-46L595-451v-149h-60v89L365-681v-139q0-24.75 17.63-42.38Q400.25-880 425-880h110q24.75 0 42.38 17.62Q595-844.75 595-820v100h105q24.75 0 42.38 17.62Q760-684.75 760-660zM425-720h110v-100H425z" /></svg>;
export default MaterialNoLuggageFill;