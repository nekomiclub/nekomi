import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMovieSpeakerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M628-78 519-187H400v-144h119l109-109zm100 53v-61q59-16 95.5-64T860-259t-36.5-109-95.5-64v-61q85 14 139 80.5T921-259t-54 153-139 81m0-159v-150q20 12 31 32t11 43-11 43-31 32m-588 24q-25 0-42.5-17.5T80-220v-520q0-25 17.5-42.5T140-800l74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q25 0 42.5 17.5T880-740v248q-38-33-83.5-51T701-561h-31L494-391H340v231z" /></svg>;
export default MaterialMovieSpeakerFill;