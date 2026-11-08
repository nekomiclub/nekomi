import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatImageRight: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-285v-390h390v390zm60-60h270v-270H510zM120-120v-60h720v60zm0-165v-60h270v60zm0-165v-60h270v60zm0-165v-60h270v60zm0-165v-60h720v60zm525 300" /></svg>;
export default MaterialFormatImageRight;