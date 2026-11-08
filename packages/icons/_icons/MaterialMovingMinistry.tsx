import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMovingMinistry: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-120v-720h560v720H371v-170H270v170zm60-60h110v-170h221v170h109v-600H100zm110-270h60v-60h-60zm0-160h60v-60h-60zm160 160h60v-60h-60zm0-160h60v-60h-60zm424 256-42-42 53-54H640v-60h165l-53-54 42-42 126 126zM210-180v-170h221v170-170H210z" /></svg>;
export default MaterialMovingMinistry;