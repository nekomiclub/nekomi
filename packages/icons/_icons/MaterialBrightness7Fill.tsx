import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrightness7Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M481-29 346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614zm138-314.05q57-57.06 57-138Q676-562 618.95-619q-57.06-57-138-57Q400-676 343-618.95q-57 57.06-57 138Q286-400 343.05-343q57.06 57 138 57Q562-286 619-343.05M385-385q-39-39-39-96t39-96 96-39 96 39 39 96-39 96-96 39-96-39" /></svg>;
export default MaterialBrightness7Fill;