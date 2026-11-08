import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLyricsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-410h160v-60H240zm442-112q-32-32-32-78t32-78 78-32q13 0 25.5 3t24.5 8v-221h150v60h-90v260q0 46-32 78t-78 32-78-32m-442-8h280v-60H240zm0-120h280v-60H240zm0 410L80-80v-740q0-25 17.5-42.5T140-880h480q25 0 42.5 17.5T680-820v59q-45 24-72.5 67T580-600t27.5 94 72.5 67v139q0 25-17.5 42.5T620-240z" /></svg>;
export default MaterialLyricsFill;