import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideoChat: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M313-409h247q14.03 0 23.51-9.77Q593-428.55 593-443v-93l87 87v-227l-87 87v-94q0-14.03-9.49-23.51Q574.03-716 560-716H313q-14.02 0-23.51 9.49Q280-697.03 280-683v240q0 14.45 9.49 24.23Q298.98-409 313-409M80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240zm134-220h606v-520H140v600zm-74 0v-520z" /></svg>;
export default MaterialVideoChat;