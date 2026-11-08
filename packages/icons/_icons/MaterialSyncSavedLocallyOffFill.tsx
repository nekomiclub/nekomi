import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSyncSavedLocallyOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m837-28-97-97H40v-60h640l-46-46H147q-24 0-42-18t-18-42v-487l-55-55 43-43L880-71zm-32-203L531-506l118-118-42-43-119 119-286-286h612q24 0 42 18t18 42v483q0 26-20 44t-49 16" /></svg>;
export default MaterialSyncSavedLocallyOffFill;