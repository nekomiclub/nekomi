import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpokeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-540q-62 0-106-44t-44-106q0-63 44-106.5T480-840q63 0 106.5 43.5T630-690q0 62-43.5 106T480-540M270-120q-62 0-106-44t-44-106q0-63 44-106.5T270-420q63 0 106.5 43.5T420-270q0 62-43.5 106T270-120m420 0q-62 0-106-44t-44-106q0-63 44-106.5T690-420q63 0 106.5 43.5T840-270q0 62-43.5 106T690-120" /></svg>;
export default MaterialSpokeFill;