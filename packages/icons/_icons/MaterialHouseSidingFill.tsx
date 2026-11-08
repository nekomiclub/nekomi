import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHouseSidingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M201-120v-432L76-457l-36-47 440-336 440 336-37 47-125-96v433h-60v-120H261v120zm60-340h437v-100H261zm0 160h437v-100H261zm29-320h380L480-765z" /></svg>;
export default MaterialHouseSidingFill;