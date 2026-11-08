import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextRotateUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M764-160h-60v-566l-52 52-42-42 124-124 126 124-44 42-52-52zM560-283 120-447v-66l440-164v55l-108 39v206l108 39zM405-394v-172l-233 84v4z" /></svg>;
export default MaterialTextRotateUp;