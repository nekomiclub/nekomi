import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMailLock: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M143-160q-25 0-44-18.5T80-220v-520q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-740v210h-60v-150L480-463 140-680v460h530v60zm337-367 340-213H140zM140-220v-520zm625 60q-14 0-24.5-10.5T730-195v-120q0-14 11.5-24.5T770-350v-45q0-30.94 22.04-52.97 22.05-22.03 53-22.03Q876-470 898-447.97T920-395v45q17 0 28.5 10.5T960-315v120q0 14-10.5 24.5T925-160zm35-190h90v-44.91Q890-414 877.09-427t-32-13T813-427.06q-13 12.93-13 32.06z" /></svg>;
export default MaterialMailLock;