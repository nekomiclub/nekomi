import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGolfCourse: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M791-123q-20 0-34.5-14.5T742-172t14.5-34.5T791-221t34.5 14.5T840-172t-14.5 34.5T791-123M396-80q-97 0-166.5-19T160-149q0-21 40-39.5t94-27.5v76h72v-740l292 142-232 122v396q90 5 148 25t58 46q0 31-69.5 50T396-80" /></svg>;
export default MaterialGolfCourse;