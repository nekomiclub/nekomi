import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialYakitoriFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M858-60 678-240 573-135q-17 17-42.5 17T488-135l-75-75q-17-17-17-42.5t17-42.5l17-17-75-75-17 17q-17 17-42.5 17T253-370l-75-75q-17-17-17-42.5t17-42.5l17-17-75-75q-17-17-17-42.5t17-42.5l46-46L60-858l43-42 105 106 46-46q17-17 42.5-17t42.5 17l75 75 17-16q17-17 42-17t42 17l76 75q17 17 17 42.5T591-621l-17 16 75 75 17-16q17-17 42.5-17t42.5 17l75 75q17 17 17 42.5T826-386L721-282l179 180z" /></svg>;
export default MaterialYakitoriFill;