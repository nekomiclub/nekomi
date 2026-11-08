import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSipFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M453-357h60v-246h-60zm120 0h50v-89h110q14 0 27-13.5t13-27.5v-75q0-14-13-27.5T733-603H573zm-387 0h160q14 0 27-13.5t13-27.5v-66q0-14-13-27.5T346-505H236v-48h150v-50H226q-14 0-27 13.5T186-562v66q0 14 13 27.5t27 13.5h110v48H186zm437-139v-57h100v57zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18z" /></svg>;
export default MaterialSipFill;