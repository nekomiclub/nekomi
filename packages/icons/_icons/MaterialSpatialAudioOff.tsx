import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpatialAudioOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m764-389 43-43q-45-49-71-110t-26-127 26.5-126.5T808-905l-43-43q-54 57-84.5 129T650-669t30 150.5T764-389m141-142 42-42q-17-20-27-44.5T910-668t9.5-51 27.5-45l-42-43q-27 28-41 64t-14 74 14.5 73.5T905-531m-505 90q-66 0-108-42t-42-108 42-108 108-42 108 42 42 108-42 108-108 42M80-120v-94q0-38 19-64.5t49-41.5q51-26 120.5-43T400-380t131 17 120 43q30 15 49.5 41.5T720-214v94zm60-60h520v-34q0-16-8.5-29.5T627-266q-48-27-109-40.5T400-320t-118.5 14.5T172-266q-14 7-23 21.5t-9 30.5zm324.5-346.5Q490-552 490-591t-25.5-64.5T400-681t-64.5 25.5T310-591t25.5 64.5T400-501t64.5-25.5M400-180" /></svg>;
export default MaterialSpatialAudioOff;