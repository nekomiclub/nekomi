import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSportsFootballFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M425-131q-121 20-194.5 8T146-146t-23-86.5 8-192.5zm70-15L146-495q15-58 44-113t68-94 95.5-68.5T465-814l349 349q-14 57-43.5 112.5T702-258q-40 40-94.5 69T495-146M368-326l266-266-42-42-266 266zm461-209L535-829q123-20 195.5-8t83.5 23 23 85-8 194" /></svg>;
export default MaterialSportsFootballFill;