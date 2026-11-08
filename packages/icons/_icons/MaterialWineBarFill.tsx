import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWineBarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-120v-60h130v-185q-99-14-154.5-79.5T240-600v-240h480v240q0 90-55.5 155.5T510-365v185h130v60zm-20-510h360v-150H300z" /></svg>;
export default MaterialWineBarFill;