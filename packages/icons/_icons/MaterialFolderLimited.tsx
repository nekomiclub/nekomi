import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFolderLimited: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M593-337q47-47 47-113t-47-113-113-47-113 47-47 113 47 113 113 47 113-47M422-543q13-8 27.5-12.5T480-560q46.2 0 78.1 31.9T590-450q0 16-4.5 30.5T573-392zm58 203q-45 0-77.5-32.5T370-450q0-16 4.5-30.5T387-508l151 151q-13 8-27.5 12.5T480-340M140-160q-24 0-42-18.5T80-220v-520q0-23 18-41.5t42-18.5h281l60 60h339q23 0 41.5 18.5T880-680v460q0 23-18.5 41.5T820-160zm0-60h680v-460H456l-60-60H140zm0 0v-520z" /></svg>;
export default MaterialFolderLimited;