import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContentPasteOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m840-206-60-60v-514h-60v90H355L205-840h177q7-35 34.5-57.5T480-920t63.5 22.5T578-840h202q26 0 43 17t17 43zM508.5-791.5Q520-803 520-820t-11.5-28.5T480-860t-28.5 11.5T440-820t11.5 28.5T480-780t28.5-11.5M694-180 180-694v514zm-514 60q-26 0-43-17t-17-43v-574l-59-59 43-43 752 752-43 43-59-59z" /></svg>;
export default MaterialContentPasteOffFill;