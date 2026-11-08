import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkdownCopyFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M300-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18zM180-80q-24 0-42-18t-18-42v-620h60v620h500v60zm209-340h50v-190h57v127h50v-127h56v190h50v-206q0-14-9.5-24T619-660H422q-14 0-23.5 10t-9.5 24z" /></svg>;
export default MaterialMarkdownCopyFill;