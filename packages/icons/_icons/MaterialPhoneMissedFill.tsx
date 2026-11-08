import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPhoneMissedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m136-146-94-94q-9-9-8.5-21t8.5-22q82-96 197-146.5T480-480t241 50.5T918-283q8 10 8.5 22t-8.5 21l-94 94q-8 8-23 9t-24-6l-114-85q-6-5-9-11t-3-13v-139q-42-16-85.5-22.5T480-420t-85.5 6.5T309-391v139q0 7-3 13t-9 11l-114 85q-12 9-24.5 8T136-146m343-377L268-737v122h-60v-225h225v60H307l173 171 231-232 43 43z" /></svg>;
export default MaterialPhoneMissedFill;