import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGamepadCircleDownFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M381-121q-41-41-41-99t41-99 99-41 99 41 41 99-41 99-99 41-99-41m0-520q-41-41-41-99t41-99 99-41 99 41 41 99-41 99-99 41-99-41m155.5-42.26q23.5-23.27 23.5-56.5 0-33.24-23.26-56.74-23.27-23.5-56.5-23.5-33.24 0-56.74 23.26-23.5 23.27-23.5 56.5 0 33.24 23.26 56.74 23.27 23.5 56.5 23.5 33.24 0 56.74-23.26M220-340q-58 0-99-41t-41-99 41-99 99-41 99 41 41 99-41 99-99 41m-.24-60q33.24 0 56.74-23.26 23.5-23.27 23.5-56.5 0-33.24-23.26-56.74-23.27-23.5-56.5-23.5-33.24 0-56.74 23.26-23.5 23.27-23.5 56.5 0 33.24 23.26 56.74 23.27 23.5 56.5 23.5M740-340q-58 0-99-41t-41-99 41-99 99-41 99 41 41 99-41 99-99 41m-.24-60q33.24 0 56.74-23.26 23.5-23.27 23.5-56.5 0-33.24-23.26-56.74-23.27-23.5-56.5-23.5-33.24 0-56.74 23.26-23.5 23.27-23.5 56.5 0 33.24 23.26 56.74 23.27 23.5 56.5 23.5" /></svg>;
export default MaterialGamepadCircleDownFill;