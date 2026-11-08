import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocalDrinkFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M262-80q-23 0-40.5-15T202-133l-82-747h720l-82 747q-2 23-19.5 38T698-80zm-55-560h546l20-180H187zm349.5 416q31.5-31 31.5-75 0-47-28.5-100T480-500q-51 48-79.5 101T372-299q0 44 31.5 75t76.5 31 76.5-31" /></svg>;
export default MaterialLocalDrinkFill;