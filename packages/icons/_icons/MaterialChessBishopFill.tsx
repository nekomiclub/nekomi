import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChessBishopFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80v-192q60-42 106-98t75-123h-98v-60h83l-56-93q-11-18-8.5-38.5T279-720l201-200 201 200q14 14 17 34.5t-8 38.5l-56 94h83v60h-99q29 67 75.5 123T800-272v192zm341.5-586.5Q510-675 510-688t-8.5-21.5T480-718t-21.5 8.5T450-688t8.5 21.5T480-658t21.5-8.5" /></svg>;
export default MaterialChessBishopFill;