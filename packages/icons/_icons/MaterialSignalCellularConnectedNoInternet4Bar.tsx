import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignalCellularConnectedNoInternet4Bar: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m80-80 800-800v225H740v575zm749-9q-9-9-9-21t9-21 21-9 21 9 9 21-9 21-21 9-21-9m-9-111v-375h60v375z" /></svg>;
export default MaterialSignalCellularConnectedNoInternet4Bar;