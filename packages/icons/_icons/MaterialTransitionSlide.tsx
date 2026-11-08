import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTransitionSlide: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h120q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-59h120v-521H100zm320 59q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h440q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-59h440v-521H420zm-200 0v-521zm200 0v-521z" /></svg>;
export default MaterialTransitionSlide;