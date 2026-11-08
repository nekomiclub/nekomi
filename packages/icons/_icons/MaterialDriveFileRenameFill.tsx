import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDriveFileRenameFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M434-260h286v-60H494zm-194 0h123l298-299q9-9 13.5-20.5T679-602t-4-22-13-20l-37-37q-9-9-20-13.5t-23-4.5q-11 0-22 4t-20 13L240-383zm342-303-38-38 38-38 37 37zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialDriveFileRenameFill;