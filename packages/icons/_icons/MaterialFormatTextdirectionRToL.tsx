import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatTextdirectionRToL: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M390-360v-220q-66 0-113-43t-47-106.5 43.5-107T380-880h280v60h-90v460h-60v-460h-60v460zM234-196l74 74-42 42-146-146 146-146 42 42-74 74h606v60zm156-444v-180q-42 0-71 24t-29 66 29 66 71 24m0-90" /></svg>;
export default MaterialFormatTextdirectionRToL;