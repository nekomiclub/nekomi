import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEncrypted: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M429-360h102l-25-145q20-9 32-26.5t12-38.5q0-29-20.5-49.5T480-640t-49.5 20.5T410-570q0 21 12 38.5t32 26.5zm51 279q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81m0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143m0-337" /></svg>;
export default MaterialEncrypted;