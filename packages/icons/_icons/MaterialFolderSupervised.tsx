import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderSupervised: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-220v-520 220-20zm0 60q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v194q-14-11-28.5-19T820-520v-160H456l-60-60H140v520h328q4 16 9 31t13 29zm421 0v-19q0-42 42.5-65T721-267t117.5 23 42.5 65v19zm108.5-195.42q-21.5-21.42-21.5-51.5t21.42-51.58 51.5-21.5 51.58 21.42 21.5 51.5-21.42 51.58-51.5 21.5-51.58-21.42" /></svg>;
export default MaterialFolderSupervised;