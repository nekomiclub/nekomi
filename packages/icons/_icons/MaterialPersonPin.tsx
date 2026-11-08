import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonPin: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-40 359-161H180q-24 0-42-18t-18-42v-600q0-25 18-42.5t42-17.5h600q24 0 42 17.5t18 42.5v600q0 24-18 42t-42 18H601zM180-258q60-56 136-90.5T480-383t164 34.5T780-258v-563H180zm400-244q40-40 40-98t-40-98-98-40-98 40-40 98 40 98 98 40 98-40M235-221h490v-9q-54-46-116-69.5T480-323t-129 23.5T235-230zm192-324q-23-23-23-55t23-55 55-23 55 23 23 55-23 55-55 23-55-23m53 5" /></svg>;
export default MaterialPersonPin;