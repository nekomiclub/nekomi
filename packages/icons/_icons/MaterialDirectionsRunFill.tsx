import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDirectionsRunFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M535-40v-239l-108-99-42 188-265-55 11-56 199 40 73-369-100 47v134h-60v-175l164-69q32-14 45.5-17.5T480-714q20 0 35.5 8.5T542-680l42 67q26 42 71 73t105 31v60q-67 0-119.5-31T543-573l-39 158 91 84v291zm-46.5-735.5Q467-797 467-827t21.5-51.5T540-900t51.5 21.5T613-827t-21.5 51.5T540-754t-51.5-21.5" /></svg>;
export default MaterialDirectionsRunFill;