import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMoreVertFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M479.86-160Q460-160 446-174.14t-14-34T446.14-242t34-14T514-241.86t14 34T513.86-174t-34 14m0-272Q460-432 446-446.14t-14-34T446.14-514t34-14T514-513.86t14 34T513.86-446t-34 14m0-272Q460-704 446-718.14t-14-34T446.14-786t34-14T514-785.86t14 34T513.86-718t-34 14" /></svg>;
export default MaterialMoreVertFill;