import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material3dFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M520-357h135q27 0 46-19t19-46v-116q0-27-19-46t-46-19H520zm50-50v-146h85q6 0 10.5 4.5T670-538v116q0 6-4.5 10.5T655-407zm-320 47h130q14 0 27-13t13-27v-40q0-17-11.5-28.5T380-480q17 0 28.5-11.5T420-520v-40q0-14-13-27t-27-13H250v50h120v45h-74v50h74v45H250zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18z" /></svg>;
export default Material3dFill;