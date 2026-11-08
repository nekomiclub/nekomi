import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPartlyCloudyDayFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-180q-58 0-99-41t-41-99 41-99 99-41q39 0 71.5 21t47.5 57l18 41h44q33 0 56 24t23 57-23.5 56.5T420-180zm318-73q0-61-41-104.5T416-401q-20-56-68-89t-108-30q14-88 82.5-144T480-720q100 0 170 70t70 170q0 78-44.5 140T558-253M450-770v-150h60v150zm256 106-42-43 106-106 42 43zm64 214v-60h150v60zm1 302L665-254l43-43 106 106zM254-664 148-770l42-42 106 106z" /></svg>;
export default MaterialPartlyCloudyDayFill;