import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDiamondFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m358-625 105-215h34l105 215zm97 475L101-575h354zm50 0v-425h354zm153-475L553-840h207l107 215zm-565 0 107-215h207L302-625z" /></svg>;
export default MaterialDiamondFill;