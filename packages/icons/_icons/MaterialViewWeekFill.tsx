import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialViewWeekFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M141-160q-26 0-43-17t-17-43v-520q0-26 17-43t43-17h110q26 0 43 17t17 43v520q0 26-17 43t-43 17zm290 0q-26 0-43-17t-17-43v-520q0-26 17-43t43-17h99q26 0 43 17t17 43v520q0 26-17 43t-43 17zm279 0q-26 0-43-17t-17-43v-520q0-26 17-43t43-17h110q26 0 43 17t17 43v520q0 26-17 43t-43 17z" /></svg>;
export default MaterialViewWeekFill;