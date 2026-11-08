import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDigitalWellbeingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M385-651q-39-39-39-95t39-95 95-39 95 39 39 95-39 95-95 39-95-39m95 571L240-320q-18-18-29-44.5T200-426q0-56 39.5-95.5T335-561q26 0 48.5 12t39.5 29l57 57 57-57q17-17 39.5-29t48.5-12q56 0 95.5 39.5T760-426q0 35-11 61.5T720-320z" /></svg>;
export default MaterialDigitalWellbeingFill;