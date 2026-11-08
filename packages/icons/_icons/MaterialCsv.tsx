import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCsv: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M221-357h127v-50H238v-146h110v-50H221q-14.02 0-23.51 9.78Q188-583.45 188-569v179q0 14.02 9.49 23.51T221-357m166 0h137q14.03 0 23.51-9.49Q557-375.98 557-390v-78q0-13-9.49-22-9.48-9-23.51-9h-87v-54h120v-50H420q-14.02 0-23.51 9.49Q387-584.03 387-570v78q0 14 9.49 23.5T420-459h87v52H387zm271 0h57l75-246h-50l-53 183-47-183h-50zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" /></svg>;
export default MaterialCsv;