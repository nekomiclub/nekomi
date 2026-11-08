import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStethoscopeCheck: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M694-121 553-262l42-42 99 98 184-183 42 43zM540-81q-112 0-186-78.5T280-347v-35q-85-11-142.5-75.5T80-610v-230h120v-40h60v140h-60v-40h-60v170q0 71 49.5 120.5T310-440t120.5-49.5T480-610v-170h-60v40h-60v-140h60v40h120v230q0 88-57.5 152.5T340-382v35q0 85 56.5 145.5T540-141z" /></svg>;
export default MaterialStethoscopeCheck;