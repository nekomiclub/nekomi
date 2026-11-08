import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGlassCup: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M262-80q-23 0-40.34-14.93Q204.31-109.86 202-133l-82-747h720l-82 747q-2.31 23.14-19.66 38.07Q721-80 698-80zm-12-170 12 110h436l12-110zm-7-61h474l56-509H187zm7 171h460z" /></svg>;
export default MaterialGlassCup;