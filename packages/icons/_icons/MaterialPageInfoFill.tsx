import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPageInfoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M603.5-183.5Q560-227 560-290t43.5-106.5T710-440t106.5 43.5T860-290t-43.5 106.5T710-140t-106.5-43.5M120-260v-60h360v60zm23.5-303.5Q100-607 100-670t43.5-106.5T250-820t106.5 43.5T400-670t-43.5 106.5T250-520t-106.5-43.5M480-640v-60h360v60z" /></svg>;
export default MaterialPageInfoFill;