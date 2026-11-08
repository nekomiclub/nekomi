import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialZonePersonIdleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M833-91 527-397l-27 110H357l46-234-100 46v134h-60v-175l116-49L26-898l43-43 807 807zm-693-41q-24 0-42-18t-18-42v-132h60v132h132v60zm680-608v-132H688v-60h132q24 0 42 18t18 42v132zm-740 0v-132q0-12 4.52-22.88Q89.04-905.75 96-914l42 42v132zm608 608v-60h130l42 42q-7.14 8.25-17.5 13.12Q832.14-132 820-132zM224-872l-60-60h108v60zm656 656-60-60v-48h60zM540.08-646q-30.08 0-51.58-21.42t-21.5-51.5 21.42-51.58 51.5-21.5 51.58 21.42 21.5 51.5-21.42 51.58-51.5 21.5" /></svg>;
export default MaterialZonePersonIdleFill;