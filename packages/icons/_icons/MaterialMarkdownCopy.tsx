import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkdownCopy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M300-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18zm0-60h440v-560H300zM180-80q-24 0-42-18t-18-42v-620h60v620h500v60zm209-340h50v-190h57v127h50v-127h56v190h50v-206q0-14.45-9.49-24.22Q633.03-660 619-660H422q-14.02 0-23.51 9.78Q389-640.45 389-626zm-89 160v-560z" /></svg>;
export default MaterialMarkdownCopy;