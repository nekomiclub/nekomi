import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShieldWatchFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m658-80-17-85q-38-23-59.5-61.5T560-310t21.5-83.5T641-455l17-85h144l17 85q38 23 59.5 61.5T900-310t-21.5 83.5T819-165l-17 85zm150-152q32-32 32-78t-32-78-78-32-78 32-32 78 32 78 78 32 78-32M480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v161H608l-21 110q-41 32-64 79t-23 101 23.5 102 65.5 80q-26 16-53 27.5T480-81" /></svg>;
export default MaterialShieldWatchFill;