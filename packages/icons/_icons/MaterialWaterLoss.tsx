import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWaterLoss: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M444-330q-52 0-102 14.5T247-275l15 135h436l17-150h-18q-37 0-68-5.5T544-316q-25-7-49.5-10.5T444-330m-204-10q47-24 98.96-37 51.97-13 105.04-13 30 0 59.5 4t56.5 12q51.13 14 78.23 19 27.09 5 57.77 5h25l52-470H187zm22 260q-23 0-40.34-14.93Q204.31-109.86 202-133l-82-747h720l-82 747q-2.31 23.14-19.66 38.07Q721-80 698-80zm182-60h254-436z" /></svg>;
export default MaterialWaterLoss;