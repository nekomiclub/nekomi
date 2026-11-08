import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSdFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm133-197h127q14 0 27-9.5t13-23.5v-73q0-14-13-23.5t-27-9.5H290v-57h100v17h50v-33q0-14-13-24t-27-10H273q-14 0-23.5 10t-9.5 24v73q0 14 9.5 23.5T273-463h117v56H290v-16h-50v33q0 14 9.5 23.5T273-357m247 0h150q20 0 35-15t15-35v-146q0-20-15-35t-35-15H520zm50-50v-146h100v146z" /></svg>;
export default MaterialSdFill;