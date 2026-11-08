import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContentPasteSearch: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M838-80 728-190q-21 17-46.5 23.5T630-160q-70.83 0-120.42-49.62Q460-259.24 460-330.12t49.62-120.38 120.5-49.5 120.38 49.58Q800-400.83 800-330q0 26-6.5 52T770-232l110 110zM708-251.86q32-31.86 32-78T708.14-408t-78-32T552-408.14t-32 78T551.86-252t78 32T708-251.86M840-530h-60v-250h-60v90H240v-90h-60v600h250v60H180q-26 0-43-17t-17-43v-600q0-26 17-43t43-17h202q7-35 34.5-57.5T480-920t63.5 22.5T578-840h202q26 0 43 17t17 43zM508.5-791.5Q520-803 520-820t-11.5-28.5T480-860t-28.5 11.5T440-820t11.5 28.5T480-780t28.5-11.5" /></svg>;
export default MaterialContentPasteSearch;