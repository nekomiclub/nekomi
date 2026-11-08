import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDeleteHistoryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m670-120-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83zm-193 0q-149 0-253-105.5T120-481h60q0 125 86 213t211 88q24 0 46.5-3.5T568-194v62q-22 6-45 9t-46 3M142-607v-208h60v106q52-61 123.5-96T477-840q151 0 257 104t106 254v10h-60v-13q0-124-89-209.5T477-780q-68 0-127.5 31T246-667h105v60zm418 245L451-469v-214h60v189l81 79z" /></svg>;
export default MaterialDeleteHistoryFill;