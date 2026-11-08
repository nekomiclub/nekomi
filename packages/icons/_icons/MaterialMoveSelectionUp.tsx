import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoveSelectionUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-400v-480h480v480zm60-60h360v-360H300zm360 220v-60h60v60zm-420 0v-60h60v60zM660-80v-60h60v60zm-210 0v-60h60v60zm-210 0v-60h60v60zm240-560" /></svg>;
export default MaterialMoveSelectionUp;