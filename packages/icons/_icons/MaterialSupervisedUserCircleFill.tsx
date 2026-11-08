import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSupervisedUserCircleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M325-111.5q-73-31.5-127.5-86t-86-127.5T80-480.5t31.5-155 86-127 127.5-86T480.5-880t155 31.5 127 86 86 127 31.5 155T848.5-325t-86 127.5-127 86-155 31.5T325-111.5m145.5-349Q511-501 511-558t-40.5-97.5T373-696t-97.5 40.5T235-558t40.5 97.5T373-420t97.5-40.5M749-405q31-31 31-75t-31-75-75-31-75 31-31 75 31 75 75 31 75-31M480-140q86 0 158-39t119-104q-21-6-40.5-10.5T674-298q-55 0-129.5 32.5T422-145q14 2 28.5 3.5T480-140m-135-28q32-71 75-107t60-47q-23-10-50.5-14t-56.5-4q-47 0-91.5 12.5T196-293q27 42 65 73.5t84 51.5" /></svg>;
export default MaterialSupervisedUserCircleFill;