import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOverviewFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m800-134 28-28-75-75v-112h-40v128zm-67 93q-78 0-133-55.5T545-228q0-78 55-133.5T733-417q77 0 132.5 55.5T921-228q0 76-55.5 131.5T733-41M280-620h400v-60H280zm230 500H180q-25 0-42.5-17.5T120-180v-600q0-25 17.5-42.5T180-840h600q25 0 42.5 17.5T840-780v329q-25-13-52-19t-55-6q-14 0-27 1.5t-26 4.5v-40H280v60h344q-36 18-64.5 46.5T513-340H280v60h211q-3 13-4.5 26t-1.5 27q0 29 6 55t19 52" /></svg>;
export default MaterialOverviewFill;