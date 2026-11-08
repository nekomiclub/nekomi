import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNoSoundFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m611-323-43-43 114-113-114-113 43-43 113 114 113-114 43 43-114 113 114 113-43 43-113-114zm-491-37v-240h160l200-200v640L280-360z" /></svg>;
export default MaterialNoSoundFill;