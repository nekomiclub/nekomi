import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialScreenRotationUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m563-35-42-42 83-83H310q-29 0-49.5-20.5T240-230v-416l60 60v366h304l-83-83 42-42 156 155zm157-279-60-60v-366H355l83 83-42 42-156-155 156-155 42 42-83 83h295q29 0 49.5 20.5T720-730z" /></svg>;
export default MaterialScreenRotationUp;