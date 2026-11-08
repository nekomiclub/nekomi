import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatImageLeft: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-285v-390h390v390zm60-60h270v-270H180zm-60-435v-60h720v60zm450 165v-60h270v60zm0 165v-60h270v60zm0 165v-60h270v60zM120-120v-60h720v60zm195-360" /></svg>;
export default MaterialFormatImageLeft;