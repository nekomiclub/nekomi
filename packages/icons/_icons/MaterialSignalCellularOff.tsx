import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignalCellularOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M224-140h510L479-395zM845-29l-51-51H80l357-357-328-328 43-43L888-72zm35-137-60-60v-510L565-481l-42-42 357-357zM607-268" /></svg>;
export default MaterialSignalCellularOff;