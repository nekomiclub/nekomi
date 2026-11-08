import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialArrowsOutput: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-230h60v127l148-148 43 43-148 148h127v60zm490 0v-60h127L590-327l43-43 147 147v-127h60v230zM327-590 180-737v127h-60v-230h230v60H223l147 147zm306 0-43-43 147-147H610v-60h230v230h-60v-127zM481-413q-28.05 0-48.02-19.5Q413-452 413-480t19.98-47.5Q452.95-547 481-547q27.23 0 46.61 19.5Q547-508 547-480t-19.39 47.5Q508.23-413 481-413" /></svg>;
export default MaterialArrowsOutput;