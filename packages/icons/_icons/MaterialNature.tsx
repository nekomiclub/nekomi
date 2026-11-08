import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNature: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M230-80v-60h220v-180h-90q-83 0-141.5-58.5T160-520q0-60 33-110.5t89-73.5q9-75 65.5-125.5T480-880t132.5 50.5T678-704q56 23 89 73.5T800-520q0 83-58.5 141.5T600-320h-90v180h230v60zm130-300h240q58 0 99-41t41-99q0-42-24-76.5T654-648l-32-14-4-35q-7-53-46-88t-92-35-92 35-46 88l-4 35-32 14q-38 17-62 51.5T220-520q0 58 41 99t99 41m120-220" /></svg>;
export default MaterialNature;