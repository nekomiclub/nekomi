import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPaddingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M328-637q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m173 0q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m173 0q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialPaddingFill;