import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSportsGolf: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M281.5-401.5Q200-483 200-600t81.5-198.5T480-880t198.5 81.5T760-600t-81.5 198.5T480-320t-198.5-81.5M636-444q64-64 64-156t-64-156-156-64-156 64-64 156 64 156 156 64 156-64M417-623q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m168 0q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m-84-90q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9M450-80v-48q0-36-23-59t-59-23h-88v-60h400v60h-88q-36 0-59 23t-23 59v48zm30-520" /></svg>;
export default MaterialSportsGolf;