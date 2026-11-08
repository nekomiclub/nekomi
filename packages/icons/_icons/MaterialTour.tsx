import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTour: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-80v-800h60v84h580l-81 193 81 193H260v330zm60-656v266zm292 183.79q21-21.21 21-51T551.79-654t-51-21T450-653.79t-21 51T450.21-552t51 21T552-552.21M260-470h491l-55-133 55-133H260z" /></svg>;
export default MaterialTour;