import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarkAdded: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M716-605 610-711l42-43 64 64 148-149 43 43zM200-120v-665q0-24 18-42t42-18h290v60H260v574l220-93 220 93v-334h60v425L480-240zm60-665h290z" /></svg>;
export default MaterialBookmarkAdded;