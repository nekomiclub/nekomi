import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrightness5: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M481-29 346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614zm138-314q57-57 57-138t-57-138-138-57-138 57-57 138 57 138 138 57 138-57m-234-42q-39-39-39-96t39-96 96-39 96 39 39 96-39 96-96 39-96-39m96 272 108-107h151v-151l109-109-109-109v-151H589L481-849 371-740H220v151L111-480l109 109v151h150zm0-368" /></svg>;
export default MaterialBrightness5;