import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialManageHistoryFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M142-607v-208h60v106q52-61 123.5-96T477-840q151 0 257 104t106 254v10h-60v-13q0-124-89-209.5T477-780q-68 0-127.5 31T246-667h105v60zm-22 126h60q0 125 86 213t211 88h12l34 57q-11 2-22.5 2.5t-23.5.5q-149 0-253-105.5T120-481m440 119L451-469v-214h60v189l81 79zM735-10l-10-66q-18-5-34-13.5T661-112l-55 12-25-42 47-44q-3-12-3-25t3-25l-47-44 25-42 55 12q14-14 30-22.5t34-13.5l10-66h54l10 66q18 5 34 13.5t30 22.5l55-12 25 42-47 44q3 12 3 25t-3 25l47 44-25 42-55-12q-14 14-30 22.5T799-76l-10 66zm85-143q22-22 22-58t-22-58-58-22-58 22-22 58 22 58 58 22 58-22" /></svg>;
export default MaterialManageHistoryFill;