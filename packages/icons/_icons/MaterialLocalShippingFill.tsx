import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocalShippingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140.5-195.5Q106-230 106-279H40v-461q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49-34.5 83.5T731-161t-83.5-34.5T613-279H342q0 49-34.5 83.5T224-161t-83.5-34.5M265-238q17-17 17-41t-17-41-41-17-41 17-17 41 17 41 41 17 41-17m507 0q17-17 17-41t-17-41-41-17-41 17-17 41 17 41 41 17 41-17m-93-187h186L754-573h-75z" /></svg>;
export default MaterialLocalShippingFill;