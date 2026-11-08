import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestAudio: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-120q-66 0-113-47t-47-113v-360q0-83 58.5-141.5T400-840h160q83 0 141.5 58.5T760-640v360q0 66-47 113t-113 47zm0-60h240q42 0 71-29t29-71v-360q0-58-41-99t-99-41H400q-58 0-99 41t-41 99v360q0 42 29 71t71 29m0-270q13 0 21.5-9t8.5-21q0-13-8.5-21.5T360-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9m120 0q13 0 21.5-9t8.5-21q0-13-8.5-21.5T480-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9m120 0q13 0 21.5-9t8.5-21q0-13-8.5-21.5T600-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9m-120-30" /></svg>;
export default MaterialNestAudio;