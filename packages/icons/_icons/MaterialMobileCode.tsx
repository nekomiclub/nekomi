import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMobileCode: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-100v-760zm240-629q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9M260-40q-24.75 0-42.37-17.63Q200-75.25 200-100v-760q0-24 18-42t42-18h438q24.75 0 42.38 17.62Q758-884.75 758-860v150q18 3 30 16.95 12 13.96 12 31.63V-587q0 19-12 33t-30 17v158h-60v-481H260v760h175v60zm365-21L495-190l130-129 42 42-87 87 87 87zm164 0-42-42 87-87-87-87 42-42 130 129z" /></svg>;
export default MaterialMobileCode;