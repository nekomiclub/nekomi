import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLineStyleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-160v-60h60v60zm0-120v-60h209v60zm0-120v-60h330v60zm0-120v-280h720v280zm165 360v-60h60v60zm90-120v-60h210v60zm75 120v-60h60v60zm60-240v-60h330v60zm105 240v-60h60v60zm16-120v-60h209v60zm149 120v-60h60v60z" /></svg>;
export default MaterialLineStyleFill;