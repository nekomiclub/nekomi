import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTimer10Alt1Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M365-281h60v-320H315v60h50zm160 0h60q26 0 43-17t17-43v-200q0-26-17-43t-43-17h-60q-26 0-43 17t-17 43v200q0 26 17 43t43 17m0-60v-200h60v200zM360-860v-60h240v60zm-19.5 750.5Q275-138 226-187t-77.5-114.5T120-441t28.5-139.5T226-695t114.5-77.5T480-801q67 0 125.5 22T710-717l51-51 43 43-51 51q36 40 61.5 97T840-441q0 74-28.5 139.5T734-187t-114.5 77.5T480-81t-139.5-28.5" /></svg>;
export default MaterialTimer10Alt1Fill;