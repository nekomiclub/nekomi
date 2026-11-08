import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialControlCameraFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-375q-44 0-74.5-30.5T375-480t30.5-74.5T480-585t74.5 30.5T585-480t-30.5 74.5T480-375m-1 296L301-258l42-42 135 136 137-137 43 43zM258-300 79-478l179-179 42 42-136 136 137 136zm84-357-42-43 178-178 179 178-42 42-136-136zm358 357-42-43 135-135-136-137 43-43 179 179z" /></svg>;
export default MaterialControlCameraFill;