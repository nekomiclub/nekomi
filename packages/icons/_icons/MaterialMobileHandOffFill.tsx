import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileHandOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-25 0-42.5-17.5T160-140v-581L31-850l43-43L881-86l-43 43-346-346q-35-14-65.5-13.5T367-373l-48 51L522-80zm358-393L185-868q8-5 16.5-8.5T220-880h398q25 0 42.5 17.5T678-820v120H578zM440.5-688.5Q449-697 449-710t-8.5-21.5T419-740t-21.5 8.5T389-710t8.5 21.5T419-680t21.5-8.5M800-253 638-415v-225h40q51 0 86.5 34.5T800-520zM637-80q-17 0-32-6t-26-19L399-320l11-11q8-8 19.5-11t22.5 2l296 121 48 48q-10 39-42 65t-74 26z" /></svg>;
export default MaterialMobileHandOffFill;