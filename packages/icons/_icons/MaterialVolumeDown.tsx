import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVolumeDown: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-360v-240h160l200-200v640L360-360zm420 48v-337q54 17 87 64t33 105q0 59-33 105t-87 63M500-648 387-540H260v120h127l113 109zM378-480" /></svg>;
export default MaterialVolumeDown;