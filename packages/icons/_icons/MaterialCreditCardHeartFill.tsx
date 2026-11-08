import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCreditCardHeartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v253q-13.66-10.24-28.83-18.12T820-520v-111H140v129h435q-63 37-101 100.5T436-260q0 26.49 4.5 51.75Q445-183 454-160zm576 40L576-260q-13-13-18.5-28t-5.5-30q0-32 23-57t59-25q28 0 44 13t38 35q20-20 36.5-34t45.5-14q37 0 59.5 25.5T880-317q0 15-6 30t-18 27z" /></svg>;
export default MaterialCreditCardHeartFill;