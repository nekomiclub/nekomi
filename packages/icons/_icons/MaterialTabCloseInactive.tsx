import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabCloseInactive: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M560-80v-60h200v60zm-240 0v-60h180v60zM140-560H80v-200h60zm0 240H80v-180h60zM260-80H140q-24 0-42-18t-18-42v-120h60v120h120zm196-334 84-84 84 84 42-42-84-84 84-84-42-42-84 84-84-84-42 42 84 84-84 84zM260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zm0-60h560v-560H260zm0-560v560z" /></svg>;
export default MaterialTabCloseInactive;