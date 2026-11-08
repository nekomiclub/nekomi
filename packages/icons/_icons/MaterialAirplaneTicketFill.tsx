import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirplaneTicketFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m348-325 368-101q17-5 25-16t3-28-18-23.5-29-2.5l-103 27-166-162-52 12 103 181-111 31-52-43-29 10zm472 165H140q-25 0-42.5-17.5T80-220v-153q37-8 61.5-37.5T166-480t-24.5-70T80-587v-153q0-25 17.5-42.5T140-800h680q25 0 42.5 17.5T880-740v520q0 25-17.5 42.5T820-160" /></svg>;
export default MaterialAirplaneTicketFill;