import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwitchAccess3: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-208v-142h142v142zm318-123-42-43 75-76H80v-60h351l-75-76 42-43 148 149zM80-610v-143h142v143zM409-80v-120h60v60h351v-680H469v60h-60v-120h471v209h38v176h-38v415z" /></svg>;
export default MaterialSwitchAccess3;