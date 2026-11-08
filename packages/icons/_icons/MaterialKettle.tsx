import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKettle: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-200v-533L140-880h580v130h100q24.75 0 42.38 17.62Q880-714.75 880-690v220q0 24.75-17.62 42.37Q844.75-410 820-410H720v210zm60-60h350v-560H260l50 65zm410-210h100v-220H720zM500-320h100v-440H500zM120-80v-60h720v60zm340-460" /></svg>;
export default MaterialKettle;