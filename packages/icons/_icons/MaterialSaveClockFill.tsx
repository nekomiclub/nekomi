import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSaveClockFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M597.5-135.5Q542-191 542-269t55.5-133.5T731-458t133.5 55.5T920-269t-55.5 133.5T731-80t-133.5-55.5M789-168l28-28-75-75v-112h-39v126zM233-584h358v-143H233zm-53 464q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h503l157 157v210q-26-12-52.5-18.5T732-518q-57 0-105.5 23.5T543-431q-14-10-29.5-16t-33.5-6q-43 0-73.5 30.5T376-349t30.5 73.5T480-245h4q3 34 15.5 66.5T532-120z" /></svg>;
export default MaterialSaveClockFill;