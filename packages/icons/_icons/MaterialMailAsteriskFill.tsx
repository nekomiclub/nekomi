import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMailAsteriskFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m711-45-52-30 49-85h-98v-60h98l-49-85 52-30 49 85 49-85 52 30-49 85h98v60h-98l49 85-52 30-49-85zM140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-740v374q-26-17-56-27t-64-10q-89 0-151 62t-62 151q0 8 .5 15t1.5 15zm340-303 340-217v-60L480-527 140-740v60z" /></svg>;
export default MaterialMailAsteriskFill;