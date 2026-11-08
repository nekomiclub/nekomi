import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAwardMeal: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M481-29 346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614zm0-84 79-78v-177q-26-15-43-50.5T500-500q0-58 26-99t64-41q37 0 63.5 41t26.5 99q0 47-17 82.5T620-368v148h120v-151l109-109-109-109v-151H589L481-849 371-740H220v151L111-480l109 109v151h120v-180q-26-6-43-27.5T280-477v-163h40v151h30v-151h40v151h30v-151h40v163q0 28-17 49.5T400-400v209zm-1-368" /></svg>;
export default MaterialAwardMeal;