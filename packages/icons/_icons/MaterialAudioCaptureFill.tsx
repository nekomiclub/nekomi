import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAudioCaptureFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-89v-380h60v233l63-64h101v60h-74.67zm575-151v-60h165v-168h60v168q0 24-18 42t-42 18zM450-357v-397h60v397zm-165-84v-229h60v229zm329-43v-144h60v144zM80-652v-168q0-24 18-42t42-18h164v60H140v168zm740 0v-168H655v-60h165q24 0 42 18t18 42v168z" /></svg>;
export default MaterialAudioCaptureFill;