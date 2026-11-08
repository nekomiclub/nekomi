import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWebTrafficFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M121-473v-60h126v60zm114 231-40-40 88-88 40 40zm48-397-88-88 40-40 88 88zm457 480L552-347l-44 136-104-360 352 111-138 49 187 187zM437-714v-126h60v126zm214 75-40-40 88-88 40 40z" /></svg>;
export default MaterialWebTrafficFill;