import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoveSelectionDown: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-80v-480h480v480zm60-60h360v-360H300zm-60-520v-60h60v60zm420 0v-60h60v60zM240-820v-60h60v60zm210 0v-60h60v60zm210 0v-60h60v60zM480-320" /></svg>;
export default MaterialMoveSelectionDown;