import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewColumn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-260v-440q0-24.75 17.63-42.38Q155.25-760 180-760h600q24.75 0 42.38 17.62Q840-724.75 840-700v440q0 24.75-17.62 42.37Q804.75-200 780-200H180q-24.75 0-42.37-17.63Q120-235.25 120-260m60 0h160v-440H180zm220 0h160v-440H400zm220 0h160v-440H620z" /></svg>;
export default MaterialViewColumn;