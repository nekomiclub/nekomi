import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSearchCheck2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m356-430 208-208-42-43-166 166-87-88-43 42zm45 189q-133 0-226.5-93.5T81-561t93.5-226T401-880t226 93.5T720-560q0 59-19.5 110T646-357l234 234-42 43-234-234q-42 35-93.5 54T401-241" /></svg>;
export default MaterialSearchCheck2Fill;