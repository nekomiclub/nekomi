import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGarageDoorOpen: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M305-218v-373h350v373-373H305zm-85 0h85v-373h350v373h85v-396L480-804 220-615.18zm124-248h271v-85H344zm136-189q12 0 21-9t9-21.5-9-21-21.5-8.5-21 8.62Q450-697.75 450-685q0 12 8.63 21 8.62 9 21.37 9M160-158v-414H59l421-306 420 306H800v414H615v-269H344v269z" /></svg>;
export default MaterialGarageDoorOpen;