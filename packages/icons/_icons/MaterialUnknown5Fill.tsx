import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUnknown5Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-488v-60h314v60zM480-80q-80 0-155.5-29.5T195-196l41-41q52 48 112 72.5T480-140q149 0 244.5-95.5T820-480t-95.5-244.5T480-820v-60q85 0 158 30.5T765-765t84.5 127T880-480t-30.5 158T765-195t-127 84.5T480-80" /></svg>;
export default MaterialUnknown5Fill;