import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSmbShareFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M457-430h181q24 0 41-17t17-41-17-41.5-41-17.5h-12l-2-10q-4-31-28-52t-56-21q-26 0-48 13t-30 36l-2 7h-8q-29 0-48.5 21.5T384-502t21.5 50.5T457-430M100-120q-24 0-42-18t-18-42v-570h60v570h730v60zm120-120q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h260l60 60h320q24 0 42 18t18 42v460q0 24-18 42t-42 18z" /></svg>;
export default MaterialSmbShareFill;