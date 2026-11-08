import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyboardOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M857-56 106-805l43-43L899-98zM300-325v-60h312l60 60zm-97-125v-60h60v60zm124 0v-60h60v60zm370 0v-60h60v60zM203-575v-60h60v60zm371 0v-60h60v60zm123 0v-60h60v60zm165 355-42-43v-437H383l-60-60h497q24 0 42 18t18 42v438q0 12-5 23t-13 19m-722 20q-24 0-42-18.5T80-260v-440q0-24 18-42t42-18h97l60 60H140v440h597l60 60zm308-435h62v60zm125 125h61v60zm28 28" /></svg>;
export default MaterialKeyboardOff;