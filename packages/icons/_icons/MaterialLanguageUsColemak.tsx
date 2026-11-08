import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLanguageUsColemak: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M570-340h170v-280H570zm-350 60q-24 0-42-18t-18-42v-280q0-24 18-42t42-18h200v60H220v280h200v60zm350 0q-24 0-42-18t-18-42v-280q0-24 18-42t42-18h170q24 0 42 18t18 42v280q0 24-18 42t-42 18z" /></svg>;
export default MaterialLanguageUsColemak;