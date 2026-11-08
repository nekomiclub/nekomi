import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDentistryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M680-875q66 0 113 47t47 113q0 11-1.5 29.5T834-643l-55 403q-5 41-36 63.5T677-154q-21 0-41-9t-34-29L495-348q-2-3-6.5-5t-9.5-2q-2 0-16 9L359-195q-14 21-35 31t-43 10q-35 0-65.5-22.5T180-241l-54-402q-3-24-4.5-42.5T120-715q0-66 47-113t113-47q36 0 57.5 9.5T379-845t42.5 20.5T480-815t58.5-9.5T581-845t42-20.5 57-9.5" /></svg>;
export default MaterialDentistryFill;