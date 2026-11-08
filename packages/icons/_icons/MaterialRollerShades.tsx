import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRollerShades: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-120v-60h80v-660h640v660h80v60zm140-390h520v-270H220zm0 330h520v-270H510v88q14 8 22 21.75t8 30.25q0 24.86-17.6 42.43T479.9-250t-42.4-17.57T420-310q0-16.85 8-30.43Q436-354 450-362v-88H220zm0-600h520z" /></svg>;
export default MaterialRollerShades;