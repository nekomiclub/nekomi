import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStreamFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M95-445q-15-15-15-35t15-35 35-15 35 15 15 35-15 35-35 15-35-15m108 284-43-43 173-173 43 43zm130-424L161-757l43-43 172 172zM445-95q-15-15-15-35t15-35 35-15 35 15 15 35-15 35-35 15-35-15m0-700q-15-15-15-35t15-35 35-15 35 15 15 35-15 35-35 15-35-15m182 210-43-43 172-172 43 43zm129 423L584-334l43-43 172 172zm39-283q-15-15-15-35t15-35 35-15 35 15 15 35-15 35-35 15-35-15" /></svg>;
export default MaterialStreamFill;