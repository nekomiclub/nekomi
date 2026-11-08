import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m870-189-50-50v-441H456l-60-60h-77l-60-60h162l60 60h339q23 0 41.5 18.5T880-680v460q0 8-2.5 16t-7.5 15m-8 161L730-160H140q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h34l60 60h-94v520h530L56-834l42-42L904-70zM570-490" /></svg>;
export default MaterialFolderOff;