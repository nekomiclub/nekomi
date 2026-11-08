import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFileJsonFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M170-360h76q12 0 21-9t9-21v-210h-48v192h-40v-52h-48v70q0 12 9 21t21 9m176 0h76q12 0 21-9t9-21v-79q0-12-9-21t-21-9h-58v-53h40v32h48v-50q0-12-9-21t-21-9h-76q-12 0-21 9t-9 21v79q0 12 9 21t21 9h58v53h-40v-32h-48v50q0 12 9 21t21 9m194-45v-150h44v150zm-18 48h80q12 0 21-9t9-21v-186q0-12-9-21t-21-9h-80q-12 0-21 9t-9 21v186q0 12 9 21t21 9m150 0h45v-132l53 132h50v-246h-45v133l-53-133h-50zM100-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h760q25 0 42.5 18t17.5 42v520q0 24-17.5 42T860-160z" /></svg>;
export default MaterialFileJsonFill;