import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSelfCareFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M660-40q-8.5 0-14.25-5.75T640-60t5.75-14.25T660-80h140v-60H660q-8.5 0-14.25-5.75T640-160t5.75-14.25T660-180h140v-60H660q-8.5 0-14.25-5.75T640-260t5.75-14.25T660-280h140v-60H660q-8.5 0-14.25-5.75T640-360t5.75-14.25T660-380h140v-60H660q-8.5 0-14.25-5.75T640-460t5.75-14.25T660-480h140v-60H660q-8.5 0-14.25-5.75T640-560t5.75-14.25T660-580h160q24.75 0 42.38 17.62Q880-544.75 880-520v420q0 24.75-17.62 42.37Q844.75-40 820-40zM447-410.87q53-70.87 53-169T447.18-749q-52.83-71-127-71Q246-820 193-749.13t-53 169T192.82-411q52.83 71 127 71Q394-340 447-410.87M320-40q-39 0-63.5-29T237-136l17-155q-76-27-125-106.5T80-580q0-125 70-212.5T320-880t170 87.5T560-580q0 103-49.5 182.5T385-291l18 155q5 38-19.5 67T320-40" /></svg>;
export default MaterialSelfCareFill;