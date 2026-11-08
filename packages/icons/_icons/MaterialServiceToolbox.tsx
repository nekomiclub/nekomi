import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialServiceToolbox: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M303-729v-51q0-24 18-42t42-18h232q24 0 42 18t18 42v51h64q18 0 33.5 9.5T774-695l98 232q4 8 6 19.33 2 11.34 2 22.67v201q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-201q0-11.33 2-22.67Q84-455 88-463l96-232q6-15 21.5-24.5T239-729zm60 0h232v-51H363zm-79 260v-46h60v46h272v-46h60v46h127l-83-200H240l-83 200zm0 60H140v189h680v-189H676v46h-60v-46H344v46h-60zm196 0" /></svg>;
export default MaterialServiceToolbox;