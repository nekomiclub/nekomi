import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScan: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24.75 0-42.37-17.63Q160-115.25 160-140v-170h60v170h520v-170h60v170q0 24.75-17.62 42.37Q764.75-80 740-80zm-60-410v-330q0-24.75 17.63-42.38Q195.25-880 220-880h361l219 219v171h-60v-144H551v-186H220v330zM40-370v-60h880v60zm440 60" /></svg>;
export default MaterialScan;