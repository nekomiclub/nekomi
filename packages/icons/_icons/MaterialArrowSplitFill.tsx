import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArrowSplitFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-448v-60h306l232-232H575v-60h225v225h-60v-122L491-448zm415 288v-60h123L524-395l42-42 174 174v-122h60v225z" /></svg>;
export default MaterialArrowSplitFill;