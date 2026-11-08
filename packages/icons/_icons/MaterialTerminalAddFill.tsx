import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTerminalAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m300-292-42-42 103-104-104-104 43-42 146 146zm190 4v-60h220v60zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h379q-2 10-2.5 19.5t-.5 19.25q0 29.25 6.5 55.25t17.5 50H140v436h680v-302q16-4 31.17-9.32T880-545v325q0 24-18 42t-42 18zm592-444v-128H604v-60h128v-128h60v128h128v60H792v128z" /></svg>;
export default MaterialTerminalAddFill;