import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideoCameraFront: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M232-318h336v-21q0-46-45-72.5T400-438t-123 26.5-45 72.5zm168-175q35 0 57.5-22.5T480-573t-22.5-57.5T400-653t-57.5 22.5T320-573t22.5 57.5T400-493M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h520q24 0 42 18t18 42v215l160-160v410L720-435v215q0 24-18 42t-42 18zm0-60h520v-520H140zm0 0v-520z" /></svg>;
export default MaterialVideoCameraFront;