import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDetectionAndZoneOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M833-39 527-345l-27 110H357l46-234-100 46v134h-60v-175l116-49L26-846l43-43L876-82zM140-80q-24 0-42-18t-18-42v-132h60v132h132v60zm680-608v-132H688v-60h132q24 0 42 18t18 42v132zm-740 0v-132q0-12 4.52-22.88Q89.04-853.75 96-862l42 42v132zM688-80v-60h130l42 42q-7.14 8.25-17.5 13.12Q832.14-80 820-80zM224-820l-60-60h108v60zm656 656-60-60v-48h60zM540.08-594q-30.08 0-51.58-21.42t-21.5-51.5 21.42-51.58 51.5-21.5 51.58 21.42 21.5 51.5-21.42 51.58-51.5 21.5" /></svg>;
export default MaterialDetectionAndZoneOffFill;