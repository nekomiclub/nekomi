import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpatialAudioFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M920-559q-72 0-138.5-27T664-664t-78.5-117.5T558-920h61q0 60 23 115.5t65 97.5 97.5 65T920-619zm1-179q-36 0-69.5-13.5T792-791t-39.5-59.5T739-920h60q0 24 9 46.5t26 39.5 40 26.5 47 9.5zM400-441q-66 0-108-42t-42-108 42-108 108-42 108 42 42 108-42 108-108 42M80-120v-94q0-38 19-64.5t49-41.5q51-26 120.5-43T400-380t131 17 120 43q30 15 49.5 41.5T720-214v94z" /></svg>;
export default MaterialSpatialAudioFill;