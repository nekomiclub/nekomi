import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material3d: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M520-357h135q26.81 0 45.91-19.09Q720-395.19 720-422v-116q0-26.81-19.09-45.91Q681.81-603 655-603H520zm50-50v-146h85q6 0 10.5 4.5T670-538v116q0 6-4.5 10.5T655-407zm-320 47h130q14 0 27-13t13-27v-40q0-17-11.5-28.5T380-480q17 0 28.5-11.5T420-520v-40q0-14-13-27t-27-13H250v50h120v45h-74v50h74v45H250zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" /></svg>;
export default Material3d;