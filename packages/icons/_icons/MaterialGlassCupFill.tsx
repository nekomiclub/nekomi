import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGlassCupFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M262-80q-23 0-40.5-15T202-133l-82-747h720l-82 747q-2 23-19.5 38T698-80zm-19-231h474l56-509H187z" /></svg>;
export default MaterialGlassCupFill;