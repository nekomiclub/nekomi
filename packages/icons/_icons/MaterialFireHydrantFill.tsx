import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFireHydrantFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80v-60h80v-130h-40q-33 0-56.5-23.5T120-350v-80q0-33 23.5-56.5T200-510h40v-130h-80v-60h88q20-78 83.5-129T480-880t148.5 51T712-700h88v60h-80v130h40q33 0 56.5 23.5T840-430v80q0 33-23.5 56.5T760-270h-40v130h80v60zm419-211q41-41 41-99t-41-99-99-41-99 41-41 99 41 99 99 41 99-41m-155.5-42.26q-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5-33.24 0-56.74-23.26" /></svg>;
export default MaterialFireHydrantFill;