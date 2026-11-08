import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNfcOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-574l-94-94 43-43L876-84l-43 43-79-79zm60-120v-394l-60-60v514h514l-60-60zm600 35-60-60v-515H265l-60-60h575q24 0 42 18t18 42zm-540-95h274L300-574zm420-25-60-60v-275H510v125l-60-60v-65q0-26 17-43t43-17h210zM523-523" /></svg>;
export default MaterialNfcOff;