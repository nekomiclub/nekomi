import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileDownloadOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m813-61-99-99H220q-24 0-42-18t-18-42v-143h60v143h434L520-354l-40 41-193-193 41-40L61-813l43-43 752 752zM606-439l-43-44 67-66 43 43zm-96-97-60-60v-204h60zm290 294-60-60v-61h60z" /></svg>;
export default MaterialFileDownloadOffFill;