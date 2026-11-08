import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyboardKeysFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M287-285v-60h387v60zM123-450v-60h60v60zm164 0v-60h60v60zm163 0v-60h60v60zm164 0v-60h60v60zm163 0v-60h60v60zM123-615v-60h60v60zm164 0v-60h60v60zm163 0v-60h60v60zm164 0v-60h60v60zm163 0v-60h60v60z" /></svg>;
export default MaterialKeyboardKeysFill;