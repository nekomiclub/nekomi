import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlashlightOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M806-87 630-263v183H330v-483L56-837l43-43 749 750zm-416-53h180v-183L390-503zm240-293-60-61v-44l90-131v-35H360l-60-60h360v-56H300v56l-60-60v-56h480v225l-90 132zM510-553" /></svg>;
export default MaterialFlashlightOff;