import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBlinds2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M161-80v-576H80v-112q0-46.67 32.67-79.33Q145.33-880 192-880h576q46.67 0 79.33 32.67Q880-814.67 880-768v112h-79.89v576zm60-60h519v-145H221zm0-205h519v-146H633v52q0 12.75-8.62 21.37Q615.75-409 603-409q-12 0-21-8.63-9-8.62-9-21.37v-52H221zm0-206h352v-105H221zm412 0h107v-105H633zM140-716h680v-51.93Q820-790 805.05-805T768-820H192q-22.1 0-37.05 14.95T140-768zm680 0H140z" /></svg>;
export default MaterialBlinds2;