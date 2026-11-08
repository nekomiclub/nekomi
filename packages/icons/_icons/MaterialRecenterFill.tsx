import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRecenterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-40v-187l-55 55-43-42 128-128 128 128-42 42-56-55v187zM214-352l-42-43 55-55H40v-60h187l-55-56 42-42 128 128zm533 0L619-480l128-128 42 42-55 56h186v60H734l55 55zm-267-78q-21 0-35.5-14.5T430-480t14.5-36.5T480-532q22 0 37 15t15 37q0 21-15.5 35.5T480-430m0-189L352-747l43-42 55 55v-186h60v186l56-55 42 42z" /></svg>;
export default MaterialRecenterFill;