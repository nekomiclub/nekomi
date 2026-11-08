import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoneyBagFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-338q-25 0-42-17.5T421-398t17-42.5 42-17.5q26 0 43.5 17.5T541-398t-17.5 42.5T480-338M309-675h344l82-165H226zm23 555h297q88 0 150-62t62-150q-1-38-13.5-72.5T791-468L669-615H292L169-468q-23 29-36 63.5T120-332q0 88 62 150t150 62" /></svg>;
export default MaterialMoneyBagFill;