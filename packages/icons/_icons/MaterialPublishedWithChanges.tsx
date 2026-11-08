import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPublishedWithChanges: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M430-82q-72-9-134.5-43t-108-86.5-71.5-121T90-480q0-88 41.5-168T243-790H121v-60h229v229h-60v-129q-64 51-102 121.5T150-480q0 132 80 225.5T430-143zm-7-228L268-465l42-42 113 113 227-227 42 42zm187 200v-229h60v129q64-52 102-122t38-148q0-132-80-225.5T530-817v-61q146 18 243 129t97 269q0 88-41.5 168T717-170h122v60z" /></svg>;
export default MaterialPublishedWithChanges;