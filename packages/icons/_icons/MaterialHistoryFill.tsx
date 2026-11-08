import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHistoryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M477-120q-149 0-253-105.5T120-481h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477-780q-68 0-127.5 31T246-667h105v60H142v-208h60v106q52-61 123.5-96T477-840q75 0 141 28t115.5 76.5 78 113.5T840-482t-28.5 141-78 115T618-148.5 477-120m128-197L451-469v-214h60v189l137 134z" /></svg>;
export default MaterialHistoryFill;