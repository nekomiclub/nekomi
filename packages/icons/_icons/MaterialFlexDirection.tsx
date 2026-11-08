import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlexDirection: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-160v-280h360v280zm0-360v-280h360v280zm60-60h240v-160H140zm594 420L548-346l42-42 114 113v-525h60v525l114-113 42 42z" /></svg>;
export default MaterialFlexDirection;