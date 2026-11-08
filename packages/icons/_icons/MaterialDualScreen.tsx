import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDualScreen: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m220-242 280 112v-588L220-830zm-22 55q-17-7-27.5-21.5T160-242v-578q0-24.75 17.63-42.38Q195.25-880 220-880l300 106q18 6 29 21.53T560-718v588q0 32.01-26.5 49.51Q507-63 478-75zm302-13v-60h240v-560H220v-60h520q24.75 0 42.38 17.62Q800-844.75 800-820v560q0 24.75-17.62 42.37Q764.75-200 740-200zm-280-42v-588z" /></svg>;
export default MaterialDualScreen;