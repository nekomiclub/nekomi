import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlashlightOn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M330-80v-443l-90-132v-225h480v225l-90 132v443zm114-260.82q-15-14.83-15-36Q429-398 443.82-413q14.83-15 36-15Q501-428 516-413.18q15 14.83 15 36Q531-356 516.18-341q-14.83 15-36 15Q459-326 444-340.82M300-764h360v-56H300zm360 60H300v35l90 131v398h180v-398l90-131zM480-480" /></svg>;
export default MaterialFlashlightOn;