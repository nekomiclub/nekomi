import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitScene2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-120q-24 0-42-18t-18-42v-210h60v210h520v-210h60v210q0 24-18 42t-42 18zM80-450v-60h80v-270q0-24 18-42t42-18h520q24 0 42 18t18 42v270h80v60zm140-60h520v-270H220zm520 330H220zm0-600H220z" /></svg>;
export default MaterialSplitScene2;