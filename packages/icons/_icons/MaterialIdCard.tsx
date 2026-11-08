import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialIdCard: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M580-450h180v-60H580zm0-120h180v-60H580zM200-320h320v-19q0-42-42.5-68.5T360-434t-117.5 26.5T200-339zm211.5-195.42q21.5-21.42 21.5-51.5t-21.42-51.58-51.5-21.5-51.58 21.42-21.5 51.5 21.42 51.58 51.5 21.5 51.58-21.42M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" /></svg>;
export default MaterialIdCard;