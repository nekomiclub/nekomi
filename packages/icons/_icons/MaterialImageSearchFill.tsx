import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialImageSearchFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h283q-19 28-28 60t-9 66q0 96 65 161t161 65q23 0 42.5-3.5T731-502l109 110v212q0 24-18 42t-42 18zm695-322L742-575q-21 14-41.5 20.5T652-548q-70 0-118-48t-48-118 48-118 118-48 118 48 48 118q0 28-8 53t-22 46l130 130zM652-608q46 0 76-30t30-76-30-76-76-30-76 30-30 76 30 76 76 30M237-277h487L577-472 447-302l-93-126z" /></svg>;
export default MaterialImageSearchFill;