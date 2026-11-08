import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOnlinePrediction: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M197-197q-54-54-85.5-127T80-480t31.5-156T197-763l36 36q-49 47-76 111.5T130-480t27 135.5T233-233zm80-80q-38-38-62.5-91.5T190-480t24.5-111.5T277-683l35 35q-34 30-53 76t-19 92 19 92 53 76zm165-23q0-21-15-43t-32.5-45-32.5-48.5-15-53.5q0-55 39-94t94-39 94 39 39 94q0 28-15 53.5T565.5-388 533-343t-15 43zm-2 90v-50h80v50zm243-67-35-35q34-30 53-76t19-92-19-92-53-76l35-35q38 38 62.5 91.5T770-480t-24.5 111.5T683-277m80 80-36-36q49-47 76-111.5T830-480t-27-135.5T727-727l36-36q54 54 85.5 127T880-480t-31.5 156T763-197" /></svg>;
export default MaterialOnlinePrediction;