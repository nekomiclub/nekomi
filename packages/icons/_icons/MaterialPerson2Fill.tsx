import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPerson2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M369-480q-27 0-45.5-20.5T309-548l16-120q8-57 52-94.5T480-800t103 37.5 52 94.5l16 120q4 27-14.5 47.5T591-480zM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420t123 15.5T731-360q31 14 50 41t19 65v94z" /></svg>;
export default MaterialPerson2Fill;