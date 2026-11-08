import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMailAsterisk: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m480-527 340-213H140zM140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-740v346h-60v-286L480-463 140-680v460h406v60zM711-45l-52-30 49-85h-98v-60h98l-49-85 52-30 49 85 49-85 52 30-49 85h98v60h-98l49 85-52 30-49-85z" /></svg>;
export default MaterialMailAsterisk;