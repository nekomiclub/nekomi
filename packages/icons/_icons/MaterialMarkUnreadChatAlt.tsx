import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkUnreadChatAlt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-399h313v-60H240zm0-130h480v-60H240zm0-130h435q-21-11-38.5-26T605-719H240zM80-80v-740q0-24 18-42t42-18h437q-4 14-6 29.5t-1 30.5H140v600l74-80h606v-349q16.79-5 31.4-13.5Q866-671 880-682v382q0 24-18 42t-42 18H240zm60-740v520zm542 68.88q-32-32.12-32-78T682.12-907t78-32T838-906.88t32 78T837.88-751t-78 32T682-751.12" /></svg>;
export default MaterialMarkUnreadChatAlt;