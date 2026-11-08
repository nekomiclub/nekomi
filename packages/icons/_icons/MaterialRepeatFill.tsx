import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRepeatFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-80 120-240l160-160 42 44-86 86h464v-160h60v220H236l86 86zm-80-450v-220h524l-86-86 42-44 160 160-160 160-42-44 86-86H260v160z" /></svg>;
export default MaterialRepeatFill;