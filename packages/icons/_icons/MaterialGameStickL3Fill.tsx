import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGameStickL3Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-786 380-919h200zm194 510v136q0 24.75-17.62 42.37Q638.75-80 614-80H345q-24.75 0-42.37-17.63Q285-115.25 285-140v-136q-92-31-148.5-85.51T80-482.8Q80-582 196.5-651T480-720t283.5 69.25Q880-581.51 880-483q0 67.24-56.5 122.12T674-276M432-380h116v-30h-86v-175h-30z" /></svg>;
export default MaterialGameStickL3Fill;