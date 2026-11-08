import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyboardOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M857-56 106-805l43-43L899-98zM300-325h372l-60-60H300zm-97-125h60v-60h-60zm124 0h60v-60h-60zm370 0h60v-60h-60zM203-575h60v-60h-60zm371 0h60v-60h-60zm123 0h60v-60h-60zM140-200q-24 0-42-18.5T80-260v-440q0-24 18-42t42-18h97l560 560zm722-20L634-450v-60h-62l-62-65v-60h-63L323-760h497q24 0 42 18t18 42v438q0 12-5 23t-13 19" /></svg>;
export default MaterialKeyboardOffFill;