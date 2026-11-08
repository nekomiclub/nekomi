import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSms: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M334.5-534.5Q346-546 346-563t-11.5-28.5T306-603t-28.5 11.5T266-563t11.5 28.5T306-523t28.5-11.5m177 0Q523-546 523-563t-11.5-28.5T483-603t-28.5 11.5T443-563t11.5 28.5T483-523t28.5-11.5m170 0Q693-546 693-563t-11.5-28.5T653-603t-28.5 11.5T613-563t11.5 28.5T653-523t28.5-11.5M80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240zm134-220h606v-520H140v600zm-74 0v-520z" /></svg>;
export default MaterialSms;