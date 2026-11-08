import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderSupervisedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v194q-35-26-75-40t-84-14q-112 0-186 77.5T461-280q0 32 7.5 62t21.5 58zm421 0v-19q0-42 42.5-65T721-267t117.5 23 42.5 65v19zm108.5-195.5Q648-377 648-407t21.5-51.5T721-480t51.5 21.5T794-407t-21.5 51.5T721-334t-51.5-21.5" /></svg>;
export default MaterialFolderSupervisedFill;