import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCoPresentFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M860-131v-649H100v320H40v-320q0-25 17.5-42.5T100-840h760q25 0 42.5 17.5T920-780v580q0 26-17 45.5T860-131M252-443q-42-42-42-108t42-108 108-42 108 42 42 108-42 108-108 42-108-42M40-80v-94q0-38 19-65t49-41q67-30 128.5-45T360-340t123 15.5T611-280q31 14 50 41t19 65v94z" /></svg>;
export default MaterialCoPresentFill;