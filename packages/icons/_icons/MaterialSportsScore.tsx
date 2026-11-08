import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSportsScore: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M390-740h60v-60h-60zm120 0v-60h60v60zM390-500v-60h60v60zm240-120v-60h60v60zm0 120v-60h60v60zm-120 0v-60h60v60zm120-240v-60h60v60zm-180 60v-60h60v60zM270-160v-640h60v60h60v60h-60v60h60v60h-60v400zm300-400v-60h60v60zm-120 0v-60h60v60zm-60-60v-60h60v60zm120 0v-60h60v60zm60-60v-60h60v60z" /></svg>;
export default MaterialSportsScore;