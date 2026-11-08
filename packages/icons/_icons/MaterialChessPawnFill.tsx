import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChessPawnFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-80v-189q98-69 139-138.33 41-69.34 56-122.67H243v-60h105q-20-23-31.5-52.49Q305-671.97 305-705q0-72.92 51.04-123.96T480-880q72 0 123.5 51.04T655-705q0 33.03-11.5 62.51Q632-613 612-590h105v60H605q15 53 55 122.5T800-269v189z" /></svg>;
export default MaterialChessPawnFill;