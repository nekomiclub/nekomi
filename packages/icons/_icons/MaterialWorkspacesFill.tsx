import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWorkspacesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M123.5-163.5Q80-207 80-270t43.5-106.5T230-420t106.5 43.5T380-270t-43.5 106.5T230-120t-106.5-43.5m501 0Q581-207 581-270t43.5-106.5T731-420t106.5 43.5T881-270t-43.5 106.5T731-120t-106.5-43.5m-250-421Q331-628 331-691t43.5-106.5T481-841t106.5 43.5T631-691t-43.5 106.5T481-541t-106.5-43.5" /></svg>;
export default MaterialWorkspacesFill;