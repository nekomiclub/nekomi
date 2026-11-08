import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyboardPreviousLanguageFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80q-24 0-42-18.5T80-140v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 23-18 41.5T820-80zm160-125h360v-60H300zm-97-125h60v-60h-60zm124 0h60v-60h-60zm123 0h60v-60h-60zm124 0h60v-60h-60zm123 0h60v-60h-60zM203-455h60v-60h-60zm124 0h60v-60h-60zm123 0h60v-60h-60zm124 0h60v-60h-60zm123 0h60v-60h-60zM250-740v-180h60v75q32-35 75.5-55t93.5-20q81 0 144 50.5T704-740h-63q-17-54-60.71-87-43.72-33-100.29-33-37.86 0-71.93 16T351-800h79v60z" /></svg>;
export default MaterialKeyboardPreviousLanguageFill;