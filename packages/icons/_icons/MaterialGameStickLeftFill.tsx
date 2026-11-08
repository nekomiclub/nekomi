import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameStickLeftFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M674-356v136q0 24.75-17.62 42.37Q638.75-160 614-160H345q-24.75 0-42.37-17.63Q285-195.25 285-220v-136q-92-31-148.5-85.51T80-562.8Q80-662 196.5-731T480-800t283.5 69.25Q880-661.51 880-563q0 67.24-56.5 122.12T674-356M432-460h116v-30h-86v-175h-30z" /></svg>;
export default MaterialGameStickLeftFill;