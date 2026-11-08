import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoveSelectionLeft: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-240v-480h480v480zm60-60h360v-360H140zm520-360v-60h60v60zm0 420v-60h60v60zm160-420v-60h60v60zm0 210v-60h60v60zm0 210v-60h60v60zM320-480" /></svg>;
export default MaterialMoveSelectionLeft;