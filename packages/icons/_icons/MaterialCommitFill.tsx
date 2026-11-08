import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCommitFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M352.5-325.5Q298-371 284-440H80v-80h204q14-69 68.5-114.5T480-680t127.5 45.5T676-520h204v80H676q-14 69-68.5 114.5T480-280t-127.5-45.5M479.76-340Q538-340 579-380.76q41-40.77 41-99Q620-538 579.24-579q-40.77-41-99-41Q422-620 381-579.24q-41 40.77-41 99Q340-422 380.76-381q40.77 41 99 41" /></svg>;
export default MaterialCommitFill;