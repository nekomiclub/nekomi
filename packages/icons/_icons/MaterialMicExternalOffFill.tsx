import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMicExternalOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M356-683 193-846q17-17 37.5-25.5T274-880q48 0 81 33.5t33 81.5q0 26-8 47t-24 35m444 443-60-60v-426q0-39-28-66.5T645-820t-67 27.5-28 66.5v237l-60-60v-177q0-64 45.5-109T645-880t109.5 45T800-726zm34 204L550-320v85q0 65-45 110T396-80q-65 0-110-45t-45-110h-34l-40-416h51L28-842l42-42L876-78zM462.5-168q27.5-28 27.5-67v-145L367-503l-26 268h-40q0 39 28 67t67 28 66.5-28" /></svg>;
export default MaterialMicExternalOffFill;