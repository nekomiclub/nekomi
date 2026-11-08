import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSyncSavedLocallyOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m805-231-60-60h69v-483H262l-60-60h612q24 0 42 18t18 42v483q0 26-20 44t-49 16m32 203-97-97H40v-60h640l-46-46H147q-24 0-42-18t-18-42v-487l-55-55 43-43L880-71zM574-291 147-718v427zm-86-257 119-119 43 42-119 120z" /></svg>;
export default MaterialSyncSavedLocallyOff;