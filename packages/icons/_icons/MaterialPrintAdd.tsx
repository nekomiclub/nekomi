import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPrintAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M732-123v-120H612v-60h120v-120h60v120h120v60H792v120zM140-588h680zm102 468v-176H80v-246q0-45.05 30.5-75.53Q141-648 186-648h588q45.05 0 75.53 30.47Q880-587.05 880-542v87q-14-9-28.5-15.5T820-482v-60q0-20-13.22-33-13.23-13-32.78-13H186q-19.55 0-32.77 13.22Q140-561.55 140-542v186h102v-76h376q-14 13-25.5 28T572-372H302v192h267q8 17 18.5 32t24.5 28zm416-528v-132H302v132h-60v-192h476v192z" /></svg>;
export default MaterialPrintAdd;