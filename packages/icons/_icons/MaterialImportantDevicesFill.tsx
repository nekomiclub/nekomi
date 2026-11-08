import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialImportantDevicesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M680-120q-17 0-28.5-11.5T640-160v-334q0-17 11.5-28.5T680-534h160q17 0 28.5 11.5T880-494v334q0 17-11.5 28.5T840-120zm0-60h160v-294H680zM355-419l85-65 85 65-31-106 86-69H473l-33-104-33 104H300l86 69zm-35 299v-60h90v-100H140q-25 0-42.5-17.5T80-340v-440q0-25 17.5-42.5T140-840h599q26 0 43.5 17.5T800-780v186H680q-42 0-71 29t-29 71v214H470v100h90v60z" /></svg>;
export default MaterialImportantDevicesFill;