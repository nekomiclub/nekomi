import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInventoryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M620-159 460-319l43-43 117 117 239-239 43 43zm220-414h-60v-207h-60v90H240v-90h-60v600h251v60H180q-26 0-43-17t-17-43v-600q0-26 17-43t43-17h202q7-35 34.5-57.5T480-920t63.5 22.5T578-840h202q26 0 43 17t17 43zM508.5-791.5Q520-803 520-820t-11.5-28.5T480-860t-28.5 11.5T440-820t11.5 28.5T480-780t28.5-11.5" /></svg>;
export default MaterialInventoryFill;