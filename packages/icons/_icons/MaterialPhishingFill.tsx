import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhishingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M270-190q-70-70-70-170v-216l176 176-42 43-74-74v71q0 75 52.5 127.5T440-180t127.5-52.5T620-360v-134q-35-11-57.5-40T540-600t22.5-66 57.5-40v-174h60v174q35 11 57.5 40t22.5 66-22.5 66.5T680-494v134q0 100-70 170t-170 70-170-70" /></svg>;
export default MaterialPhishingFill;