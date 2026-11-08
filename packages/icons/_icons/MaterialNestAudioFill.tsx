import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestAudioFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-120q-66 0-113-47t-47-113v-360q0-83 58.5-141.5T400-840h160q83 0 141.5 58.5T760-640v360q0 66-47 113t-113 47zm.5-330q12.5 0 21-9t8.5-21.5-8.62-21Q372.75-510 360-510q-12 0-21 8.62-9 8.63-9 21.38 0 12 9 21t21.5 9m120 0q12.5 0 21-9t8.5-21.5-8.62-21Q492.75-510 480-510q-12 0-21 8.62-9 8.63-9 21.38 0 12 9 21t21.5 9m120 0q12.5 0 21-9t8.5-21.5-8.62-21Q612.75-510 600-510q-12 0-21 8.62-9 8.63-9 21.38 0 12 9 21t21.5 9" /></svg>;
export default MaterialNestAudioFill;