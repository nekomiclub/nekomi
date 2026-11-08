import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextRotationDown: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M226-120 100-244l44-42 52 52v-566h60v566l52-52 42 42zm174-163v-55l108-39v-206l-108-39v-55l440 164v66zm155-111 233-84v-4l-233-84z" /></svg>;
export default MaterialTextRotationDown;