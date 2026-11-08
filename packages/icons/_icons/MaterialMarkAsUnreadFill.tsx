import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarkAsUnreadFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-279q-23-5-41.5-21T80-339v-343q0-12 5-22.5t19-17.5l320-158 307 158q9 7 18 20.5t12 24.5h-74L424-813 140-672zm90 159q-25 0-42.5-17.5T170-180v-407q0-25 17.5-42.5T230-647h590q25 0 42.5 17.5T880-587v407q0 25-17.5 42.5T820-120zm295-258 295-145v-64L525-445 230-587v64z" /></svg>;
export default MaterialMarkAsUnreadFill;