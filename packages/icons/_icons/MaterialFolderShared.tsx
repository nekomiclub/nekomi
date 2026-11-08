import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderShared: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M439-290h320v-19q0-42-42.5-68.5T599-404t-117.5 26.5T439-309zm211.5-195.42q21.5-21.42 21.5-51.5t-21.42-51.58-51.5-21.5-51.58 21.42-21.5 51.5 21.42 51.58 51.5 21.5 51.58-21.42M140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160zm0-60h680v-460H456l-60-60H140zm0 0v-520z" /></svg>;
export default MaterialFolderShared;