import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFullscreenExitFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M253-120v-133H120v-60h193v193zm394 0v-193h193v60H707v133zM120-647v-60h133v-133h60v193zm527 0v-193h60v133h133v60z" /></svg>;
export default MaterialFullscreenExitFill;