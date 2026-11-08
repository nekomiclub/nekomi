import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVerifiedOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m346-60-76-130-151-31 17-147-96-112 96-111-17-147 16-3-65-65 42-42L861-99l-43 43-129-130-75 126-134-62zm478-308 18 153-270-266 92-91-45-41-90 90-256-252 73-125 134 62 134-62 77 131 150 31-17 147 96 111zm-387 21 46-45-51-51-89-90-47 46z" /></svg>;
export default MaterialVerifiedOffFill;